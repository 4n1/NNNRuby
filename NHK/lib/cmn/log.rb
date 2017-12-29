#-------------------------------------------------------------------------------
# ==== 概要
# ログ出力を行うクラスです。
# ==== 詳細
# 内部では Logger クラスを利用しています。
#-------------------------------------------------------------------------------
class Log

  require 'logger'
  require 'yaml'
  require 'pp'

  private_class_method  :new

  @@log     = nil
  @app_log  = nil
  @web_log  = nil
  @std_out  = nil

  #-----------------------------------------------------------------------------
  # ==== 概要
  # 内部で利用するLoggerクラスを初期化します。
  # ==== 詳細
  # 1. cnf/log.yml から値を取得の上、Logger のインスタンスにセットします。
  #-----------------------------------------------------------------------------
  def initialize(log_yml)

    cnf       = YAML.load(File.open(log_yml))

    @dir_log  = cnf['DIR_LOG']

    @app_log  = Logger.new( cnf['DIR_LOG'   ] + cnf['APP_LOG'],
                            cnf['SHIFT_AGE' ]                 ,
                            cnf['SHIFT_SIZE']                 )
    @web_log  = Logger.new( cnf['DIR_LOG'   ] + cnf['WEB_LOG'],
                            cnf['SHIFT_AGE' ]                 ,
                            cnf['SHIFT_SIZE']                 )

    @app_log.level  = cnf['APP_LEVEL']
    @web_log.level  = cnf['WEB_LEVEL']

    @std_out  = ( cnf['STD_OUT'].to_s.downcase == 'true' ) ? true : false # 標準出力制御

  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # ログのインスタンスを返します。
  # ==== 詳細
  # 内部で cnf/log.yml の値を利用します。
  # ==== 引数
  # 引数1 ログ設定ファイル（初期値は "cnf/log.yml"）
  #-----------------------------------------------------------------------------
  def Log.instance(log_yml="cnf/log.yml")
    @@log = @@log || new(log_yml)
  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # ログに出力します（デバッグ用）。
  # ==== 詳細
  # inspct を利用してオブジェクトの詳細情報も出力します。
  #-----------------------------------------------------------------------------
  def dbg(obj, msg)
#    std(  obj , msg )
    @app_log.debug( formatter(caller.first, obj.inspect)) { msg }
  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # ログに出力します（インフォメーション用）。
  # ==== 詳細
  #-----------------------------------------------------------------------------
  def inf(obj, msg)
    std(  obj , msg )
    @app_log.info(  formatter(caller.first, obj.to_s)) { msg }
  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # ログに出力します（警告用）。
  # ==== 詳細
  #-----------------------------------------------------------------------------
  def wrn(obj, msg)
    std(  obj , msg )
    @app_log.warn(  formatter(caller.first, obj.to_s)) { msg }
  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # ログに出力します（エラー用）。
  # ==== 詳細
  #-----------------------------------------------------------------------------
  def err(obj, msg)
    std(  obj , msg )
    @app_log.error( formatter(caller.first, obj.to_s)) { msg }
  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # 標準出力に表示します。
  # ==== 詳細
  #
  #-----------------------------------------------------------------------------
  def std(obj,msg, val=nil)

    if @std_out
      pp "#{Time.now.strftime("%Y-%m-%d %H:%M:%S")} #{msg}"
      pp val if val
      pp
    end
  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # Web履歴出力します。
  # ==== 詳細
  #
  #-----------------------------------------------------------------------------
  def web(obj,msg,inf)

    if(inf.inspect =~ /Net::HTTP/)
      @web_log.info( msg ){"code : #{inf.code} #{inf.message}"}       # status
      inf.each { |k,v| @web_log.info( msg ){ "head : #{k} => #{v}"} } # header
      @web_log.info( msg ){ "body : \n #{inf.body}"}                  # body
    else
      @web_log.info( msg ){inf.inspect}
    end

  end

  #-----------------------------------------------------------------------------
  # ==== 概要
  # 呼出元の情報をログ出力用に編集します。
  # ==== 詳細
  # caller.first の情報をカンマ区切りに編集します。
  #-----------------------------------------------------------------------------
  def formatter(call_point, call_class)

    rtn = ''

    if call_point =~ /^(.+?):(\d+)(?::in `(.*)')?/

      file  = ($1==nil) ? '' : $1
      line  = ($2==nil) ? '' : $2
      proc  = ($3==nil) ? '' : $3

      file  = file.gsub('\\','/').gsub( @dir_log, '')
      proc  = proc + '()'  unless proc == ''
      rtn   = file + ',' + line + ',' + proc + ',' + call_class

    end

    rtn

  end

#  def parse_caller(at)
#
#    if /^(.+?):(\d+)(?::in `(.*)')?/ =~ at
#
#      file    = ($1==nil) ? '' : $1
#      line    = ($2==nil) ? '' : $2
#      proc  = ($3==nil) ? '' : $3
#
#      file    = file.gsub($app_home,'')
#      proc  = proc + '()'  unless proc == ''
#
#      [file, line, proc]
#    end
#  end

end

