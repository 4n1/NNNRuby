#! ruby -Ku -w
#-------------------------------------------------------------------------------
# ==== 概要
# ==== 詳細
#-------------------------------------------------------------------------------
class Web

  # Windows上のRubyでSSL接続時にcertificate verify failedが出る場合の対処
  # http://qiita.com/whiteleaf7@github/items/4504b208ad2eec1f9357
  ENV["SSL_CERT_FILE"] = "#{File.dirname(__FILE__)}/ssl/certs/cacert.pem"

  require 'net/http'
  require 'net/https'
  require 'uri'
  require 'pp'

 attr_reader  :yml      ,
              :last_url ,
              :last_res

  # ----------------------------------------------------------------------------
  # ==== 概要
  # ==== 詳細
  # ==== 引数
  # 引数1 プロキシ情報を持つ yml のファイルパス<br>
  # ・例：<br>
  #   "cnf/proxy.yml"<br>
  # 引数2 テスト用のスタブ http オブジェクト(テスト時のみ使用)
  # ----------------------------------------------------------------------------
  def initialize(proxy_yml="cnf/proxy.yml", http=nil)

    @http         = nil
    @last         = nil
    @cookie       = nil
    @proxy        = nil
    @last_access  = nil
    @res          = nil
    @head         = nil

    @yml    = "#{proxy_yml}"
    prx     = YAML.load(File.open(@yml))
    @proxy  = Net::HTTP::Proxy(prx['hst'],prx['prt'],prx['usr'],prx['pwd'])

    @http   = http if http
  end

  #=============================================================================
#  private
  #=============================================================================

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # ログにレスポンス情報を出力します（デバッグ用）
  # ==== 詳細
  # ・HTTPResponse のレスポンスコードとメッセージをログ出力します。
  # ・HTTPResponse のヘッダをログ出力します。
  # ・HTTPResponse のボディをログ出力します。
  # ==== 引数
  # 引数１::get または post で取得した HTTPResponse オブジェクト
  # 引数２::強制出力フラグ(trueにすると err でログ出力します)
  # ==== 戻値
  # なし
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def dbg_response( res ,enforce=false)

    if enforce
      $log.err( self, "HTTPResponse : #{@res.code} #{@res.message}" )      # status
      @res.each{ |key, val| $log.err( self, "head : #{key}  => #{val}") }  # header
      $log.err( self, "body : \n" + @res.body)                             # body
    else
      $log.dbg( self, "HTTPResponse : #{@res.code} #{@res.message}" )      # status
      @res.each{ |key, val| $log.dbg( self, "head : #{key}  => #{val}") }  # header
      $log.dbg( self, "body : \n" + @res.body)                             # body
    end

  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 文字列をエンコードします。
  # ==== 詳細
  # 左側の文字を右側の文字列に変換します。
  #  ' ' --> '%20'
  #  '#' --> '%23'
  #  ',' --> '%2C'
  #  '-' --> '%2D'
  #  '.' --> '%2E'
  #  ':' --> '%3A'
  #  '_' --> '%5F'
  # ==== 引数
  # 引数1::エンコード元の文字列
  # ==== 戻値
  # エンコードされた文字列
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def encode(org_val)
    wrk = org_val
    wrk = wrk.gsub(' ', '%20')
    wrk = wrk.gsub('#', '%23')
    wrk = wrk.gsub(',', '%2C')
    wrk = wrk.gsub('-', '%2D')
    wrk = wrk.gsub('.', '%2E')
    wrk = wrk.gsub(':', '%3A')
    wrk = wrk.gsub('_', '%5F')
    rtn = wrk
    rtn
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # httpオブジェクトを返します。
  # ==== 詳細
  # 既存の http オブジェクトが無いときは、新規に作成します。
  # 既存の http オブジェクトが有るときは、それを再利用します。
  # 既存の http オブジェクトと 引数 url の host が異なるときは、新規に作り直します。
  # ==== 引数
  # 引数1::アクセス先のURL(フルパス)
  # ==== 戻値
  # http オブジェクト
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_http(url)
    #-------------------------------------
    # 初期処理
    #-------------------------------------
    uri   = URI.parse( url )
    @http = @http || @proxy.new(uri.host, uri.port) # @http が nil なら新規作成
    uri.host= @http.address unless uri.host         # 引数に host 部が無い時、補完

    #-------------------------------------
    # 主要処理
    #-------------------------------------
    # uri.host が変わったら、作り直し
    @http = ( @http.address == uri.host       ) \
          ? ( @http                           ) \
          : ( @proxy.new(uri.host, uri.port)  ) \
          ;

    if( uri.scheme  == 'https' ) && ( @http.use_ssl? == false )
      @http.use_ssl = true
#      https.ca_file = '/usr/share/ssl/cert.pem'
#      https.verify_mode = OpenSSL::SSL::VERIFY_PEER
#      https.verify_depth = 5
    end

    @http.start  unless @http.active?

    #-------------------------------------
    # 終了処理
    #-------------------------------------
    @http

#    uri   = URI.parse( url )
#    @http = @http || Net::HTTP.new( uri.host, uri.port )
#
#    @http = ( @http.address == uri.host         ) \
#          ? ( @http                             ) \
#          : ( Net::HTTP.new(uri.host, uri.port) )
#
#    if( uri.scheme  == 'https' ) && ( @http.use_ssl? == false )
#      @http.use_ssl = true
##      http.cert_store = OpenSSL::X509::Store.new
##      http.cert_store.set_default_paths
##      http.verify_mode = OpenSSL::SSL::VERIFY_PEER
#    end
#
#    @http.start  unless @http.active?
#
#    @http
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # URL を Net::HTTP クラスの get 形式にエンコードします
  # ==== 詳細
  # ==== 引数
  # 引数１::フルパスのURL
  # ==== 戻値
  # エンコードされた URI (httpオブジェクトで使う path)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_path( url )
    # ----------------------------------
    # 初期処理
    # ----------------------------------
    $log.dbg( self, "========== STR =========="  )

    # ----------------------------------
    # 主要処理
    # ----------------------------------
    path  = URI.parse(url).path
    query = URI.parse(url).query

    rtn   = query == nil        \
          ? path                \
          : path + '?' + URI.encode_www_form_component( query )
#         : path + '?' + query

    # ----------------------------------
    # 終了処理
    # ----------------------------------
    $log.dbg( self, "========== END =========="  )
#   URI.encode( rtn )                                 # obsolete
    rtn
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # URL を Net::HTTP クラスの get 形式にエンコードします
  # ==== 詳細
  # ==== 引数
  # 引数１::フルパスのURL
  # ==== 戻値
  # エンコードされた URI (httpオブジェクトで使う path)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_data( qry )
    # ----------------------------------
    # 初期処理
    # ----------------------------------
    $log.dbg( self, "========== STR =========="  )

    # ----------------------------------
    # 主要処理
    # ----------------------------------
    case
    when qry == nil
      wrk = qry

    when qry.instance_of?(String)
      wrk = URI.encode(  qry           )

    when qry.instance_of?(Array)
      wrk = URI.encode(  qry.join("&") )

    when qry.instance_of?(Hash)
       wrk = URI.encode_www_form( qry )
#      wrk = qry.map { |key,val|
#             "#{URI.encode(key)}=#{URI.encode(val)}"
#            }.join("&")

    else
      raise ArgumentError, "invalid argument. ARG2 : #{qry}"

    end

    # ----------------------------------
    # 終了処理
    # ----------------------------------
    $log.dbg( self, "========== END =========="  )
    rtn = wrk ? encode(wrk) : nil
    rtn
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # HTTP のリクエスト用ヘッダを作成します。
  # ==== 詳細
  # 以下の　key, value を Hash で返します。
  # 'Content-Type' => 'application/x-www-form-urlencoded'
  # 'Cookie'       => '引数1の文字列' (引数１が空文字以外のとき)
  # '引数2のkey'   => '引数2のval'    (引数２がハッシュのとき)
  # ==== 引数
  # 引数1::クッキーにセットしたい文字列
  # 引数2::追加でヘッダにセットしたい値(ハッシュ)
  # ==== 戻値
  # [詳細]の要領で編集されたハッシュ
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_header(addition=nil)
    org = {
      'Accept'          => '*/*'        ,
      'Accept-Language' => 'ja'         ,
      'Cache-Control'   => 'no-cache'   ,
      'Connection'      => 'Keep-Alive' ,
#      'User-Agent'      => 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 1.1.4322; InfoPath.1)'
      'User-Agent'      => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36'
    }
    add  = addition || {}
#    wrk = org.merge(add) if(add.instance_of?(Hash))
#    rtn = wrk.each { |key, val| wrk[URI.encode( key )] = URI.encode( val ) }
    rtn = org.merge(add)
    rtn
  end


#  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
#  # ==== 概要
#  # response から Set-Cookie を取り出し、ハッシュに変換します。<br>
#  # ==== 詳細
#  # Set-Cookie のうち、path を含む要素は除外します。
#  # ==== 引数
#  # 引数1::responseオブジェクト
#  # ==== 戻値
#  # cookie の key と val を持つハッシュ
#  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
#  def get_cookie(response)
#    res = response || ''
#    arr = res.split(';').map{ |v| v.strip  if( v !~ /path/i  ) }.compact
#    flt = arr.map{|v| v.split('=') }.flatten
#    Hash[*flt]
#  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 既存の Cookie 文字列に Set-Cookie の文字列をマージします
  # ==== 詳細
  # 既存の Cookie を old、 Set-Cookie を new としたとき、<br>
  # 以下の要領で戻値を作成します。<br>
  #   old = 'itm_1; itm_2'<br>
  #   new = 'itm_1; itm_3'<br>
  #   戻値= 'itm_1; itm_2; itm_3'<br>
  # <br>
  # また、文字列 'path' を含む要素は処理対象から除外します<br>
  # (文字列 path の大文字小文字は区別しません)
  # ==== 引数
  # 引数1::既存の cookie 文字列(区切り文字は ';')
  # 引数2::追加したい cookie 文字列(区切り文字は同上)
  # ==== 戻値
  # [詳細]の要領で編集された文字列で区切り文字は'; '(セミコロンの後にブランクあり)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def mrg_cookie(old_cookie, set_cookie)
    old_str = old_cookie  || ''
    set_str = set_cookie  || ''

    # Path , path を除外する
    old_arr = old_str.split(';').map{ |v| v.strip if( v !~ /path/i ) }.compact
    set_arr = set_str.split(';').map{ |v| v.strip if( v !~ /path/i ) }.compact

    # Array -> Hash 変換
#    old_flt = old_arr.map{|v| v.split('=') }.flatten
#    set_flt = set_arr.map{|v| v.split('=') }.flatten
#    old_hsh = Hash[*old_flt]
#    set_hsh = Hash[*set_flt]

    old_hsh = Hash[ *(old_arr.map{|v| v.split('=') }.flatten) ]
    set_hsh = Hash[ *(set_arr.map{|v| v.split('=') }.flatten) ]

    # マージ
    rtn_hsh = old_hsh.update(set_hsh)

    rtn_str = rtn_hsh.map { |key,val|
                "#{URI.encode(key)}=#{URI.encode(val)}"
              }.join('; ')
    rtn_str
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # respons ヘッダの set-cookie を @cookie に保存します。
  #
  # ==== 詳細
  # ・Ａの文字列を引数に渡すと、Ｂのハッシュを@cookieに保持させます。<br>
  #   Ａ：'login_status=LOGIN; Domain=.aaa.com; Path=/; Secure'
  #   Ｂ：{ '/@.aaa.com' => {
  #                           :DOMAIN => '.aaa.com' ,
  #                           :PATH   => '/'        ,
  #                           :SECURE => true       ,
  #                           :VALUES => ['login_status=LOGIN']
  #                         }
  #       }
  # ・上記例のkey('/@.aaa.com')は、[path + @ + domain]の意味になります。<br>
  # ・引数が 'path=' の文字列を含まないときは、何も処理しません。<br>
  #
  # ==== 引数
  # 引数1::追加したい cookie 文字列（response の Set-Cookie）
  #
  # ==== 戻値
  # @cookie(引数1を処理した後のハッシュ)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def set_cookie(set_str)
    # --------------------------------------
    # 初期処理
    # --------------------------------------
    set_arr = set_str ? set_str.split(',') : [] # 複数のset-cookieがあるときは','で区切られている
    org_hsh = @cookie || {}                     # 既存のcookieを一時保管
    set_hsh = {}

    # --------------------------------------
    # 主要処理
    # --------------------------------------
    set_arr.each do |val|

      itm = {}                                  # 戻値用配列の要素
      itm[:PATH   ] = ''                        # 初期値:空
      itm[:DOMAIN ] = @http.address             # 初期値:現在のサーバ
      itm[:SECURE ] = false                     # 初期値:false
      itm[:VALUES ] = []                        # 初期値:空

      val.split(';').each do |v|                # set-cookieの要素は';'で区切られている
        case
        when v =~ /path=/i    then  itm[:PATH   ] = v.strip.gsub(/path=/i   ,'' )
        when v =~ /domain=/i  then  itm[:DOMAIN ] = v.strip.gsub(/domain=/i ,'' )
        when v =~ /secure/i   then  itm[:SECURE ] = true
        else                        itm[:VALUES ].push(v.strip)
        end
      end

      key = "#{itm[:PATH]}@#{itm[:SECURE]}@#{itm[:DOMAIN]}"

      if( set_hsh.include?(key) )
        set_hsh[key][:VALUES].push(itm[:VALUES].to_s)
      else
        set_hsh = set_hsh.merge( { key => itm } ) unless itm[:PATH].to_s.empty?
      end

    end

    # --------------------------------------
    # 終了処理
    # --------------------------------------
    @cookie = org_hsh.merge(set_hsh)

  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # path に応じた Cookie を取り出します
  #
  # ==== 詳細
  #
  # ==== 引数
  # 引数1 URI.parse(url).path で取得した path の文字列
  # 引数2 接続先のホスト名(http.address)
  #
  # ==== 戻値
  # 引数の path に対応した Cookie の文字列
  #
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_cookie(path)
    cookie  = @cookie ||  {}
    path    = path    ||  ''

    arr = cookie.map {|k,v| v}
    arr = @http.use_ssl?  ?
          arr.map {|v| v                    }.compact :                     # SSL:SSLの時は全て
          arr.map {|v| v  unless v[:SECURE] }.compact
    arr = arr.map {|v| v  if( @http.address =~ /#{v[:DOMAIN]}$/ ) }.compact # ドメイン：後方一致するもの
    arr = arr.map {|v| v  if( path          =~ /^#{v[:PATH]}/   ) }.compact # パス:前方一致するもの
    arr = arr.map {|v| v[:VALUES] }.compact

    arr.join('; ')
  end

  #=============================================================================
#  public
  #=============================================================================

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # html の中から、form の action に該当する文字列を取得します。
  # ==== 詳細
  #
  # ==== 引数
  # 引数1 検索対象(省略時は 直近の response の body)
  # 引数2 検索キー(省略時は '<.*form .*' )
  #
  # ==== 戻値
  # ・成功時：該当する文字列(URL)
  # ・失敗時：nil または 空文字
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_form_action(response_body=nil, key='<.*form .*')

    res = response_body || @res.body

    url = res.gsub("\n"," ").split('>').grep(/#{key}/) {|tag|
      t = tag.strip.gsub("' ",'" ').split('" ')
      v = t.map{|i| i.split('"').last if i =~ /action.*=.*\"/ }.compact.to_s
      w = t.map{|i| i.split("'").last if i =~ /action.*=.*\'/ }.compact.to_s
      v.empty? ? w : v
    }.uniq.join("\t")

    raise "ACTION URL IS NOT FIXED. ACT : #{url}" if url.include?("\t")

    url
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # html の中から、form の input に該当する文字列を取得します。
  #
  # ==== 詳細
  # ・例：
  #   引数1 = <input type="hidden" name="BID" value="97.47">
  #   戻値  = { 'BID' => '97.47' }
  #
  # ==== 引数
  # 引数1 検索対象(省略時は 直近の response の body)
  # 引数2 検索キー(省略時は '<.*input .*' )
  #
  # ==== 戻値
  # ・成功時：input タグの name を キー、value を 値 とする hash
  # ・失敗時：要素数ゼロの hash
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_form_input(response_body=nil, key='<.*input .*')

    res = response_body || @res.body
    arr = res.gsub("\n"," ").split('>').grep(/#{key}/) {|tag|
            w = tag.strip.split(' ')
            k = w.map{|e| e.split('=').last if e =~ /name.*=/ }.compact.first
            v = w.map{|e| e.split('=').last if e =~ /value.*=/}.compact.first
#            k = k ? k.delete("'").delete('"') : nil
#            v = v ? v.delete("'").delete('"') : nil
            ["#{k}","#{v}"] if( k && v )
          }.compact

    Hash[*arr.flatten]
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 連続アクセスした場合、一定期間、待機します。
  # ==== 詳細
  # 最終アクセスからの経過時間(秒)とアクセス間隔(秒)を比較の上、<br>
  # アクセス間隔(秒)になるように sleep します。
  # 最終アクセスからの経過時間(秒)がアクセス間隔(秒)よりも大きいときは sleepしません。
  # 引数１が nil のときは、待ち時間ゼロでアクセスします。
  # ==== 引数
  # 引数１::最終アクセス日時(Time型)
  # 引数２::アクセス間隔(秒)
  # ==== 戻値
  # 最終アクセス日時
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def waiting(interval_sec=120)
    $log.dbg( self, "========== STR =========="  )
    # --------------------------------------
    # 初期処理
    # --------------------------------------
    last_time = (@last_access) || (Time.new - interval_sec)       # 最終アクセス日時が不明のとき
    past_time = Time.now     - last_time                          # アクセス経過秒
    wait_time = interval_sec - past_time                          # 残り待ち時間

    # --------------------------------------
    # 主要処理
    # --------------------------------------
    $log.inf( self, "PROCESS_TIME : #{past_time.round(2)} SEC.")  # アクセス経過秒
    if( wait_time > 0 )
      $log.inf( self, "WAITING_TIME : #{wait_time.round(2)} SEC. ... START")
      sleep( wait_time )
    end

#    $log.std(self,"WEB past_time : #{past_time.round(2)}")       # アクセス経過秒
#
#    if( wait_time > 0 )
#      $log.inf( self, "WEB SLEEPING BEFORE ACCESS IN #{wait_time.round(2)} SEC. ... START")
#      $log.std( self, "WEB SLEEPING BEFORE ACCESS IN #{wait_time.round(2)} SEC. ... START")
#      sleep( wait_time )
#      $log.inf( self, "WEB SLEEPING BEFORE ACCESS IN #{wait_time.round(2)} SEC. ... END"  )
#      $log.std( self, "WEB SLEEPING BEFORE ACCESS IN #{wait_time.round(2)} SEC. ... END"  )
#    end

    # --------------------------------------
    # 終了処理
    # --------------------------------------
    $log.dbg( self, "========== END =========="  )
    @last_access = Time.now
    self
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # Web に post します。<br>
  # ==== 詳細
  # 引数１はWeb サービスの URL をフルパス指定してください。<br>
  # 引数２の :qry が Stringのときはクエリの文字列として post します。<br>
  # 引数２の :qry が Array のときはクエリに変換後(配列を&でjoinした後)、post します。<br>
  # 引数２の :qry が Hash  のときはクエリに変換後(key=valを&joinした後)、post します。<br>
  #   例：
  #     ハッシュ{'usr' => 'user1' , 'pwd' => 'p@ssw0rd'}を次の文字列に変換します。<br>
  #     usr=user1&pwd=p@ssw0rd<br>
  # 引数２の :header は リクエストのヘッダに付与したい要素をハッシュで指定してください。<br>
  # 戻り値は HTTPResponse の body を返します。<br>
  # エラーの時は nil を返します。<br>
  # ==== 引数
  # 引数１::URLをフルパス指定してください。<br>
  # 引数２::ハッシュをセットしてください。<br>
  # ・[:qry]
  # ==== 戻値
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def request(url , qry=nil, head=nil ,interval_sec=0)
    $log.dbg( self, "========== STR =========="  )
    # ----------------------------------
    # 初期処理
    # ----------------------------------
    # 引数チェック

    # 初期化
    http  = get_http(url)                       # httpオブジェクト
    path  = get_path(url)                       # 変換処理(url  -> path   )
    data  = get_data(qry)                       # 変換処理(Hash -> String )

    @head = get_header(head).merge(@head || {}) # header 情報(Hash)

    # 最終アクセス情報
    @last           = @last           || {}
    @last["#{url}"] = @last["#{url}"] || {}

    l_time = @last["#{url}"][:TIME] || Time.now - interval_sec  # 最終アクセス日時
    l_data = @last["#{url}"][:DATA] || {}

    # ----------------------------------
    # 主要処理
    # ----------------------------------
    # ログ出力
#    $log.std(self ,"WEB REQ : #{http.address}#{path}" )
    $log.inf(self ,"WEB REQ : #{http.address}#{path}" )
    $log.web(self ,"WEB REQ host" , http.address      )
    $log.web(self ,"WEB REQ path" , path              )
    $log.web(self ,"WEB REQ head" , @head             )
    $log.web(self ,"WEB REQ data" , data              )

    # リクエストヘッダをセット
    @head['Cookie'        ] = (@cookie             ) ? get_cookie( path )         : nil
#    @head['If-None-Match' ] = (@res && @res['ETag']) ? @res['ETag'].gsub('"','')  : nil
##   @head['Referer'       ] = url

    @head = @head.delete_if{|k,v| v == nil }

    # リクエストを実行
    # リクエスト間隔が interval_sec より短いとき、前回のレスポンスを返す
    @res  = ( l_time <= Time.now - interval_sec ) \
          ? ( yield( http, path, data, @head  ) ) \
          : ( l_data                            ) \
          ;

    # キャッシュの保持
    set_cookie(@res['set-cookie'])
    @last["#{url}"][:TIME]  = Time.now
    @last["#{url}"][:DATA]  = @res.clone

    # ログ出力
#    $log.std(self ,"WEB RES : #{@res.code}_#{@res.message}")
    $log.inf(self ,"WEB RES : #{@res.code}_#{@res.message}")
    $log.web(self ,"WEB RES " , @res  )
    $log.web(self ,"****************" , ''    )
    dbg_response(@res)

    # ----------------------------------
    # 終了処理
    # ----------------------------------

    chs = @res['content-type'] =~  /(charset=)([a-zA-Z0-9_\-]+)/             ? $2  : # http ヘッダから charset を取得
          @res.body.delete('"')=~  /(<meta .*?charset=)([a-zA-Z0-9_\-]+)(>)/ ? $2  : # http ヘッダに無い時 body から取得
          "utf-8"

    rtn = case @res
          when Net::HTTPSuccess     then @res.body.encode("utf-8", chs) # 通常応答
          when Net::HTTPRedirection then get(@res['Location'])          # リダイレクト
#         when StbHttp              then @res.body                      # テスト用スタブ
          else
            dbg_response(@res, true)
            raise "HTTP ERROR. check log."
          end

    @last_url = url
    @last_res = rtn

    $log.dbg( self, "========== END =========="  )
    rtn
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要 TODO
  # getメソッドでhttpアクセスします。<br>
  # ログインをしていないときはログイン処理を行った後、Web サービスにアクセスします。  TODO
  # ==== 詳細
  # 引数１はWeb サービスの URL をフルパス指定してください。<br>
  # 引数２の :qry が Stringのときはクエリの文字列として get します。<br>
  # 引数２の :qry が Array のときはクエリに変換後(配列を&でjoinした後)、get します。<br>
  # 引数２の :qry が Hash  のときはクエリに変換後(key=valを&joinした後)、get します。<br>
  #   例：
  #     ハッシュ{'usr' => 'user1' , 'pwd' => 'p@ssw0rd'}を次の文字列に変換します。<br>
  #     usr=user1&pwd=p@ssw0rd<br>
  # 引数２の :header は リクエストのヘッダに付与したい要素をハッシュで指定してください。<br>
  # 戻り値は HTTPResponse の body を返します。<br>
  # エラーの時は nil を返します。<br>
  # ==== 引数
  # 引数１::URLをフルパス指定してください。<br>
  # 引数２::ハッシュをセットしてください。<br>
  # 引数３::ハッシュをセットしてください。<br>
  # ・[:qry]
  # ==== 戻値
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get(url, qry=nil, header=nil, interval_sec=0)

    res = request(url, qry, header, interval_sec) do |http, path, data, head|
            path_data = ( data ) ? ( path + '?' + data ) : ( path )
            http.get(path_data, head)
          end
    res
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # ==== 詳細
  # ==== 引数
  # ==== 戻値
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def post(url, data, header=nil, interval_sec=0)

    # 追加ヘッダの作成
    header_mrg  = {
      'Content-Type'    => 'application/x-www-form-urlencoded'
    }.merge(header || {})

    # リクエスト
    res = request(url, data, header_mrg, interval_sec) do |http, path, dat, head|
            http.post(path, dat, head)
          end
    res
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # ==== 詳細
  # ==== 引数
  # ==== 戻値
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def check_argument_size(argument, mission_critical_size)

    # 引数の必須項目件数チェック
    if argument.kind_of?(Hash)
      mcs = mission_critical_size || argument.size                    # 必須項目の件数
      siz = argument.map{|k,v| v unless("#{v}".empty?)}.compact.size  # 有意項目の件数
      raise "VALUES IS NOT FULL. qry : #{argument.inspect}" unless mcs <= siz
    end

  end
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # ==== 詳細
  # ==== 引数
  # ==== 戻値
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def finish(url)
#    http  = get_http(url)
    @http.finish  if( @http != nil && @http.active? )   # http session close
  end

# デバッグ用
#  begin
#    require 'cmn/log'
#    cnf = YAML.load(File.open('C:/zz/Src/Ruby/Projects/FX/lib/cnf/path.yml'))
#    $app_home = cnf['app_home']             # アプリのホームディレクトリ
#    $log      = Log.instance()
#    w = Web.new
#    w.login
#  end

end
