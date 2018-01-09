#! ruby -Ku -w
# 静かで質素な生活は、絶え間ない不安に縛られた成功の追求よりも多くの喜びをもたらす

require "#{File.dirname(__FILE__)}/cmn/log.rb"
require "#{File.dirname(__FILE__)}/cmn/web.rb"
require "#{File.dirname(__FILE__)}/trn/agn30_nhk.rb"


# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
# ==== 概要
# ==== 詳細
# ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
begin
    puts '処理を開始しました。'
  #---------------------------------------
  # 宣言処理
  #---------------------------------------
  dir_lib  = File.dirname(__FILE__) + '/'

  yml_log   = "#{dir_lib}cnf/log.yml"
  yml_prxy  = "#{dir_lib}cnf/proxy.yml"
  yml_agn   = "#{dir_lib}cnf/agn30_Nhk.yml"

#  yml_agn = case ARGV[0]
#              when /30|nhk/i  then "#{dir_lib}cnf/agn30_Nhk.yml"
#              else  raise "INVALID ARGUMENT : #{ARGV}"
#            end

  #---------------------------------------
  # 初期処理
  #---------------------------------------
  $log  = Log.instance(yml_log)

  $log.inf( self, "========== STR : #{__method__}"  )

  #---------------------------------------
  # ファクトリ
  #---------------------------------------
  cnf = YAML.load( File.open( yml_agn ))
  agn = eval(cnf['agn']).new(Web.new(yml_prxy), cnf )  # Web アクセスのオブジェクト

  #---------------------------------------
  # 主要処理
  #---------------------------------------
  begin
    agn.main_crawling_search  if( cnf['main_crawling_search']['is_exec']  )
    agn.main_crawling_urls    if( cnf['main_crawling_urls'  ]['is_exec']  )
    agn.main_select_items     if( cnf['main_select_items'   ]['is_exec']  )

  rescue Exception => e                                 # 想定外の終了
    $log.std( self, "***** EXCEPTION!! #{e.inspect}")
    $log.err( self, "***** EXCEPTION!! #{e.inspect}")
    e.backtrace.map{|stack| $log.std(self,"#{stack}")}
    e.backtrace.map{|stack| $log.err(self,"#{stack}")}

  ensure
    # TODO send_mail

  end

  #---------------------------------------
  # 終了処理
  #---------------------------------------
  $log.inf( self, "========== END : #{__method__}"  )
end
