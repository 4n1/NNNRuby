# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# ==== 概要
# Web クローリングに必要な機能をまとめたクラスです。
# ==== 詳細
# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
class Agn30Nhk

  require 'pp'
  require 'nokogiri'
  require 'json'
  require 'open-uri'
  require 'uri'

  UNIT_ATTR = 'UNIT_ATTRIBUTE'
  UNIT_TAG  = 'UNIT_TAG'

#  attr_reader :fms_search ,
#              :fms_urls   ,
#              :fms_scrap

  @cnf  = nil                             # cnf 設定情報
  @web  = nil                             # web webアクセスオブジェクト

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 業務処理に必要なオブジェクトを生成しています。
  # ==== 詳細
  # ・Webアクセスオブジェクトを生成します。<br>
  # ==== 引数
  # 引数１::Webアクセスオブジェクト
  # 引数２::Webアクセスの設定ファイル(yml)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def initialize( web, cnf )
    @web          = web
    @cnf          = cnf
    @DELIMITER    = cnf['delimiter']

    ymd_hms           = Time.now.strftime("%Y%m%d_%H%M%S")
    @fms_search       = cnf['fms']['search'       ].gsub('yyyymmdd_hhmmss', ymd_hms  )
    @fms_urls         = cnf['fms']['urls'         ].gsub('yyyymmdd_hhmmss', ymd_hms  )
    @fms_hashes       = cnf['fms']['hashes'       ].gsub('yyyymmdd_hhmmss', ymd_hms  )
    @fms_scrap_all    = cnf['fms']['scrap_all'    ].gsub('yyyymmdd_hhmmss', ymd_hms  )
    @fms_scrap_select = cnf['fms']['scrap_select' ].gsub('yyyymmdd_hhmmss', ymd_hms  )
    @fms_scrap_columns= cnf['fms']['scrap_columns']
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 必要な項目だけ取り出します。
  # ==== 詳細
  # ==== 引数
  # 引数１::(配列) 2次元配列、または1次元配列(要素はタブなどで区切られた String)
  #                1行目は項目名、2行目以降はデータになっていること
  # 引数２::(配列) 一次元配列で取り出したい項目名の一覧
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def retrieve_columns( rows, cols )

    # 配列の要素が String のときは区切り文字で、2次元配列に変更する
    data= rows.first.instance_of?(  String    )   ?
          rows.map{|row| row.split( @DELIMITER) } :
          rows

    # 必要な項目だけに絞り込む
    hdr = data.first
    ind = cols.map{|col|  hdr.find_index( col ) } # 必要項目のインデックスを取得
    data= data.map{|row|  row.values_at(  *ind) } # インデックスに該当する項目だけにする

    # 戻値を引数のインスタンス型にそろえる
    data= rows.first.instance_of?(  String    )   ?
          data.map{|row|  row.join( @DELIMITER) } :
          data
  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 要素がハッシュの配列を、要素が文字列の配列に変換します。
  # ==== 詳細
  # ==== 引数
  # 引数１::(配列) 要素をハッシュとする配列、または(Hash)単独の Hash インスタンス
  # 引数２::(文字) 戻値で要素を区切るときのデリミタ
  # ==== 戻値
  # 1行目は項目名     (ハッシュのキー)
  # 2行目以降はデータ (ハッシュの値)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def hashes_to_lines(src , delimiter=nil )

    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------

    # 入力チェック
    arr_src = src.instance_of?( Array ) ? src.compact :
              src.instance_of?( Hash  ) ? [src]       :
              nil

    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------

    # 全ての hash を調べて、全ての key を包含する hash を作成
    hsh_fmt = {}                                # 全ての key を包含する hash
    arr_src.each{|hsh|
      hsh.each{|key,val| hsh_fmt[key] = nil }
    }

    # 全ての hash の key を統一
    arr_hsh = arr_src.map{|hsh| hsh_fmt.merge(hsh ) }

    # 配列に変換
    arr_hdr = hsh_fmt.keys                      # ヘッダ
    arr_dat = arr_hsh.map{|hsh| hsh.values  }   # データ
    arr_rtn = arr_dat.unshift(  arr_hdr )       # ヘッダ＋データ

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    arr_rtn = delimiter                                 ?
              arr_rtn.map{|row| row.join( delimiter ) } :
              arr_rtn

#    wrk = src
#          .map{|hsh|
#            hsh.to_a.transpose
#          }
#
#    hdr = wrk.map{|val| val.first }.first
#    dat = wrk.map{|val| val.last  }
#
#    if hdr
#      hdr = delimiter ? hdr.join( delimiter )                 : hdr
#      dat = delimiter ? dat.map{|row| row.join( delimiter )}  : dat
#    end
#
#    dat.unshift(  hdr )

  end

  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 検索ページで検索した結果一覧から、必要な情報を取得します。
  #
  # ==== 詳細
  #
  # ==== 引数
  # 引数１::(文字) http response の body
  # 引数２::(文字) 検索文字
  # ==== 戻値
  # (配列) 要素は hash (検索結果のタイトルと URL)
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_search_result_from_html(res     ,
                                  keyword
                                 )

    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------
    prefix  = '<!--↓検索結果エリア-->'
    pstfix  = '<!--↑検索結果エリア-->'

    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------

    # 必要な部分を抜き出す
    src = res.gsub(/[\n\r]/,"")
          .match( /(#{prefix})(.+?)(#{pstfix})/)
          .to_a[2]
          .gsub(  '&nbsp'       , ''    )
          .gsub(  /<br.*?>/     , ''    )
          .gsub(  /<span.*?>/   , ''    )
          .gsub(  '</span>'     , ''    )
          .gsub(  '<strong>'    , ''    )
          .gsub(  '</strong>'   , ''    )
          .gsub(  '<b>'         , ''    )
          .gsub(  '</b>'        , ''    )
          .split('</td>')
          .grep(/<td>/                  )

    rows= src
          .map{|val|
            bangumi = val
                      .match(/<h\d><a href="(.*?)">(.*?)<\/a><\/h\d>.*<p class=\"read\">(.*)<\/p>/){|mtc|
                        {
                          'keyword' =>  keyword ,
                          'url'     =>  "#{$1}" ,
                          'title'   =>  "#{$2}" ,
                          'summary' =>  "#{$3}" ,
                        } if mtc
                      }

            site    = val
                      .match(/<h\d><a href="(.*?)">(.*?)<\/a><\/h\d><p>(.*?)<\/p><p>(.*?)\s.*?<\/p>/){|mtc|
                        {
                          'keyword' =>  keyword ,
                          'url'     =>  "#{$4}" ,
                          'title'   =>  "#{$2}" ,
                          'summary' =>  "#{$3}" ,
                        } if mtc
                      }
            bangumi || site
          }
          .compact

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    rows
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 検索結果に次のページがあるとき、TRUE を返します
  # ==== 詳細
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def is_next_page_of_search_result( res )

    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------
    prefix  = '<!--↓ナビゲーション-->'
    pstfix  = '<!--↑ナビゲーション-->'

    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------

    rtn = res.gsub("\n","")
          .match( /(#{prefix})(.+?)(#{pstfix})/)
          .to_a[2]
          .include?('次の20件を表示')

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    rtn
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # Web ページから、必要な情報を取得します。
  #
  # ==== 詳細
  #
  # ==== 引数
  # 引数１::(文字) html の url
  # 引数２::(文字) http response の body
  # ==== 戻値
  # (配列) 要素は hash
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_hash_from_html(url, res )
    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------
    prefix_head = '<head.*?>'
    pstfix_head = '</head>'
#    prefix_body = '<body.*?>'
#    pstfix_body = '</body>'

    rtn         = {}
    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------

    # 必要な部分を抜き出す
    src = res
          .gsub(/[\n\r]/      , ' '   )
          .gsub(/<br.*?>/     , ''    )
          .gsub(/<span.*?>/   , ''    )
          .gsub('</span>'     , ''    )
          .gsub('<strong>'    , ''    )
          .gsub('</strong>'   , ''    )
          .gsub('<b>'         , ''    )
          .gsub('</b>'        , ''    )
          .gsub('<br/>'       , ''    )
          .gsub('　'          , "  "  )
          .gsub(/&[a-z]+?;/   , ''    )
#          .gsub(  '&nbsp'     , ''    )
#          .gsub(  '&emsp;'    , ''    )

    # Header 部分から取得
    hdr = src
          .match( /(#{prefix_head})(.+?)(#{pstfix_head})/)
          .to_a[2] || src

    rtn['url']              = url
    rtn['title']            = (hdr.match(/<title>(.*?)<\/title>/i                     ).to_a[1] || '' )
    rtn['meta_keywords']    = (hdr.match(/<meta name="keywords" content="(.*?)"/i     ).to_a[1] || '' )
    rtn['meta_description'] = (hdr.match(/<meta name="description" content="(.*?)"/i  ).to_a[1] || '' )

    # Body 部分から取得
#    bdy = src
#          .match( /(#{prefix_body})(.+?)(#{pstfix_body})/)
#          .to_a[2] || src

    rtn['all_text']   = src
                        .strip
                        .gsub("\t"                      ){  " "             }   # 除去:タブ
                        .gsub(/>(\s+?)</                ){  ">#{$1.strip}<" }   # 除去:インデントの空白
                        .gsub(/<script.*?<\/script>/    ){  ""              }   # 除去:JavaScript
                        .gsub(/<header.*?<\/header>/    ){  ""              }   # 除去:ページのヘッダ
                        .gsub(/<footer.*?<\/footer>/    ){  ""              }   # 除去:ページのフッタ
                        .gsub(/<img.*?alt="(.*?)".*?>/  ){  $1.strip        }   # 残す:画像の代替文字
                        .gsub(/"(.*?)"/                 ){  ""              }   # 除去:マークアップの値
                        .gsub(/'(.*?)'/                 ){  ""              }   # 除去:マークアップの値
                        .gsub(/<h\d.*?>(.*?)<\/h\d>/    ){  "　#{$1.strip}" }   # 残す:ヘッダ要素
                        .gsub(/<p.*?>(.*?)<\/p>/        ){  "　#{$1.strip}" }   # 残す:段落要素
                        .gsub(/<[a-z].+?>(.*?)<\/.+?>/  ){  "　#{$1.strip}" }   # 残す:文字列
                        .gsub(/<.+?>/                   ){  ""              }   # 除去:マークアップのタグ
                        .gsub(/{{.*?}}/                 ){  " "             }   # 除去:マークアップの値

#                       .gsub(/<main.*?>(.*?)<\/main>/  ){  $1.strip        }   # 残す:ページのメイン

    # 全てのノードを取得 (Nokogiri を使用)
    src_nkg = res
              .gsub(  %r{[\n|\r]}             ){  ' ' }
              .gsub(  %r{<script.*?</script>} ){  ''  }   # 除去:JavaScript
              .gsub(  %r!{{.*?}}!             ){  ''  }

    Nokogiri::HTML.parse( src_nkg ).search("*").each{|node|

      # 文言、タグ名、クラス名を取得
      node_text = node.text.gsub( %r{\t+|\r|\n|\s+} ){" "}.strip.size > 0 ?
                  node.text.gsub( %r{\t+|\r|\n|\s+} ){" "}.strip          : ''
      node_name = node.name ?
                  node.name : ''
      node_class= node.attributes['class']          ?
                  node.attributes['class'].value    : ''

#     $log.inf( self, "node_text :#{node_text}:"  )
#     $log.inf( self, "node_name :#{node_name}:"  )
#     $log.inf( self, "node_class:#{node_class}:" )

      # Hash に保存(key:タグ名orクラス名、value:文言)
      if( node_text.size > 0  )
        if( node_name.size  > 0 )
          key = "tag_#{node_name}"
          rtn[key]  = ( rtn[key]  ||  []  ).push( node_text )     # タグ名が同じなら一つにまとめる
        end
        if( node_class.size > 0 )
          key = "class_#{node_class}"
          rtn[key]  = ( rtn[key]  ||  []  ).push( node_text )     # クラス名が同じなら一つにまとめる
        end
      end
    }

    # 配列にしていた値を文字列に変換
    rtn.each{|key,val|
      if( val.instance_of?(Array) )
        rtn[key]  = val.join('　')
      end
    }

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    rtn
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # pdf ページから、必要な情報を取得します。
  #
  # ==== 詳細
  #
  # ==== 引数
  # 引数１::(文字) html の url
  # 引数２::(文字) http response の body
  # ==== 戻値
  # (配列) 要素は hash
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_hash_from_pdf( url , res )
#TODO PDF読込
#TODO https://qiita.com/kijitora-neko/items/35c43769a0846b37e313
    pp "#{__method__}"
    rtn         = @fms_columns

    rtn['url']          = url
    rtn['title']        = ''
    rtn['keywords']     = ''
    rtn['description']  = ''
    rtn['all_contents'] = ''
    rtn
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 一行が URL 形式の文字列から url の一覧を取得します(行の区切り文字は \n)
  # ==== 詳細
  # ==== 引数
  # 引数１::(文字) \n が行の区切り文字形式の文字列 ( 一行が一つの絶対パスになっていること)
  # ==== 戻値
  # (配列) 要素は文字列の URL
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_urls_with_lines(  src_txt )
    rtn = src_txt
          .split("\n")
          .map{|rec|
                rec = rec.match(/(.*?)\s#.*/) ? $1 : rec    # コメント部分を削除
                rec.strip
              }
    rtn
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # json 形式の文字列から url の一覧を取得します。
  # ==== 詳細
  # ==== 引数
  # 引数１::(文字) json 形式の文字列 ( URL を取得する key は href 、引数２からの相対パスになっていること)
  # 引数２::(文字) 相対パスのベースになる URL
  # ==== 戻値
  # (配列) 要素は文字列の URL
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_urls_with_json( src_txt , url_base  )
    urls= JSON.load(  src_txt )['data']
          .map{|hsh|
            url = "#{url_base}#{hsh['href']}"
           .gsub( %r{(.+?//.+?)(//.+?/)(.*)}  ){ "#{$1}/../#{$3}" }
          }
    urls
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # ファイル名または URL から、url の一覧を取得します。
  # ==== 詳細
  # ==== 引数
  # 引数１::(文字) ファイル名(フルパス)。ファイル内容は json または全行が URL 。
  # ==== 戻値
  # (配列) 要素は文字列の URL
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_urls( src_path, req_base  )
    str = src_path  =~  /^http/i      ?
          @web.get( src_path  )       :
          File.open(src_path  ).read

    urls= src_path  =~  /json$/i                ?
          get_urls_with_json( str , req_base  ) :
          get_urls_with_lines(str             )

    urls= urls
          .keep_if{|val| val =~ /^http.*/i  }               # http で始まる要素だけ残す
          .compact.uniq.sort                                # 一意にしてソート
    urls
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # トップページを取得します
  # ==== 詳細
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def get_top_page
    interval_sec= @cnf["#{__method__}"]['req_sec']
    url         = @cnf["#{__method__}"]['req_url']
    qry         = nil
    hdr         = nil
    @web.waiting(interval_sec).get(url, qry, hdr)  # web から html を取得
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 検索結果をスクレイピングします
  # ==== 詳細
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def main_crawling_search
    $log.inf( self, "========== STR : #{__method__}"  )
    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------
    search_words= @cnf["#{__method__}"]['req_search_words']
    interval_sec= @cnf["#{__method__}"]['req_sec']
    url         = @cnf["#{__method__}"]['req_url']
    qry         = @cnf["#{__method__}"]['req_qry']
    hdr         = nil

    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------

    res = get_top_page            # トップページ

    # 1.1.検索結果一覧から、サマリーと URL をファイルに出力
    search_words.each do |word|
      
      loop do
        qry['qt'] = word                                        # 検索キーワード
        qry['st'] +=  1                                         # 検索結果のページ番号

        res = @web.waiting(interval_sec).get(url, qry, hdr)     # web から html を取得
        hsh = get_search_result_from_html( res  , qry['qt'] )   # 必要な部分を hash に保存
        arr = hashes_to_lines(  hsh , @DELIMITER  )             # hash をファイル出力形式に変換
        
        File.open(@fms_search,"a") {|f|
          f.puts( f.size == 0 ? arr : arr.drop(1) )             # 初回のみ項目名を付けてファイル出力
        }

        break unless  is_next_page_of_search_result(  res )     # 次ページの有無を判定
      end

    end

    # 2.1.検索結果一覧から URL だけファイル出力
    urls= File.open(@fms_search){|f|
              retrieve_columns( f.read.split("\n"), ['url'] )
            }
            .compact.uniq.sort                                # 一意にしてソート
            .keep_if {|val| val =~ /^http.*/ }                # http で始まる要素だけ残す

    File.open(@fms_urls,"a") {|f| f.puts( urls ) }            # ファイル出力(URL項目)

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    $log.inf( self, "========== END : #{__method__}"  )
    urls
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # 指定されたURLをスクレイピングします
  # ==== 詳細
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def main_crawling_urls
    $log.inf( self, "========== STR : #{__method__}"  )
    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------
    fms_hashes    = @fms_hashes
    fms_scrap_all = @fms_scrap_all

    interval_sec  = @cnf["#{__method__}"]['req_sec']
    article_base  = @cnf["#{__method__}"]['article_base']
    fms_urls      = @cnf["#{__method__}"]['fms_urls']

    base          = fms_urls  =~  /^http/i            ?
                    "#{File.dirname(  fms_urls  )}/"  :
                    article_base
    urls          = get_urls( fms_urls, base  ) #[6..9] # .last   #[59..64]

    hdr           = nil

    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------
    # URL 一覧から各ページの文言をタグ別/クラス別でファイルに出力
    urls.each{|url|

      res = @web.waiting(interval_sec).get(url, nil, hdr) # web から html を取得
      hsh = url.split('.').last =~ /pdf/i   ?
            get_hash_from_pdf(  url, res  ) :             # 必要な部分を hash に保存
            get_hash_from_html( url, res  )               # 必要な部分を hash に保存

      File.open(fms_hashes, "a") {|f|
        f.puts( hsh )                                     # hash 形式でいったん保存
      }

    }

    # 雛形の hash を作成 (全てのタグ/クラスを key に持つ)
    fmt = {}
    File.foreach( fms_hashes  ){|line|
      hsh = {}
      eval("#{line}").each{|key,val|  hsh[key]  = nil }
      fmt = fmt.merge(  hsh )
    }

    # hash を表形式に変換後、出力
    File.foreach( fms_hashes  ){|line|

      hsh = fmt.merge(  eval("#{line}") )
      arr = hashes_to_lines(  hsh , @DELIMITER  )         # hash をファイル出力形式に変換

      File.open(fms_scrap_all , "a") {|f|
        f.puts( f.size == 0 ? arr : arr.drop(1) )         # 初回のみ項目名を付けてファイル出力
      }

    }

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    $log.inf( self, "========== END : #{__method__}"  )
    fms_scrap_all
  end


  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  # ==== 概要
  # ファイルから表形式(行列)のデータを読み込み、指定した列だけにしてファイル出力します。
  # ==== 詳細
  #
  # ==== 引数
  # 引数１::(文字) 入力元のファイル名(フルパス)
  # 引数２::(文字) 出力先のファイル名(フルパス)
  # 引数３::(配列) 要素は出力する項目名(文字列)
  # ==== 戻値
  # (文字)出力先のファイル名
  # ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  def main_select_items(  source_file:nil ,
                          output_file:nil ,
                          output_cloumns:nil
                        )
    $log.inf( self, "========== STR : #{__method__}"  )
    #-----------------------------------------------------------------------------
    # 初期処理
    #-----------------------------------------------------------------------------
    inp_fms = source_file     ? source_file     : @cnf["#{__method__}"]['scrap_all']
    out_fms = output_file     ? output_file     : @fms_scrap_select
    out_col = output_cloumns  ? output_cloumns  : @fms_scrap_columns

    #-----------------------------------------------------------------------------
    # 主要処理
    #-----------------------------------------------------------------------------
    # 全項目があるファイルから特定項目だけファイル出力
    lines = File.open(inp_fms ){|f|
              retrieve_columns( f.read.split("\n"), out_col )
            }
            .compact

    File.open(out_fms ,"a") {|f| f.puts(lines ) }         # ファイル出力(URL項目)

    #-----------------------------------------------------------------------------
    # 終了処理
    #-----------------------------------------------------------------------------
    $log.inf( self, "========== END : #{__method__}"  )
    out_fms
  end


end
