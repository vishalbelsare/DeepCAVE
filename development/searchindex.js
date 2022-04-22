Search.setIndex({docnames:["api","api/deepcave.plugins","api/deepcave.plugins.dynamic","api/deepcave.plugins.static","api/deepcave.runs","api/deepcave.runs.converters","api/deepcave.runs.converters.bohb","api/deepcave.runs.converters.deepcave","api/deepcave.runs.converters.smac","api/deepcave.runs.grouped_run","api/deepcave.runs.handler","api/deepcave.runs.objective","api/deepcave.runs.recorder","api/deepcave.runs.run","converters","examples/index","examples/record/minimal_run","examples/record/mlp","examples/record/mlp_pytorch","examples/templates/multiple_runs","examples/templates/single_run","faq","getting_started","glossary","index","installation","plugins/budget_correlation","plugins/configuration_cube","plugins/configurations","plugins/cost_over_time","plugins/fanova","plugins/index","plugins/overview","plugins/parallel_coordinates","plugins/pareto_front"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","api/deepcave.plugins.rst","api/deepcave.plugins.dynamic.rst","api/deepcave.plugins.static.rst","api/deepcave.runs.rst","api/deepcave.runs.converters.rst","api/deepcave.runs.converters.bohb.rst","api/deepcave.runs.converters.deepcave.rst","api/deepcave.runs.converters.smac.rst","api/deepcave.runs.grouped_run.rst","api/deepcave.runs.handler.rst","api/deepcave.runs.objective.rst","api/deepcave.runs.recorder.rst","api/deepcave.runs.run.rst","converters.rst","examples/index.rst","examples/record/minimal_run.rst","examples/record/mlp.rst","examples/record/mlp_pytorch.rst","examples/templates/multiple_runs.rst","examples/templates/single_run.rst","faq.rst","getting_started.rst","glossary.rst","index.rst","installation.rst","plugins/budget_correlation.rst","plugins/configuration_cube.rst","plugins/configurations.rst","plugins/cost_over_time.rst","plugins/fanova.rst","plugins/index.rst","plugins/overview.rst","plugins/parallel_coordinates.rst","plugins/pareto_front.rst"],objects:{"deepcave.plugins":[[1,1,1,"","Plugin"],[2,0,0,"-","dynamic"],[3,0,0,"-","static"]],"deepcave.plugins.Plugin":[[1,2,1,"","__call__"],[1,3,1,"","activate_run_selection"],[1,3,1,"","button_caption"],[1,2,1,"","check_run_compatibility"],[1,2,1,"","check_runs_compatibility"],[1,3,1,"","description"],[1,2,1,"","get_base_url"],[1,2,1,"","get_filter_layout"],[1,2,1,"","get_input_layout"],[1,2,1,"","get_mpl_output_layout"],[1,2,1,"","get_output_layout"],[1,2,1,"","get_run_input_layout"],[1,2,1,"","get_selected_runs"],[1,3,1,"","icon"],[1,3,1,"","id"],[1,2,1,"","load_dependency_inputs"],[1,2,1,"","load_inputs"],[1,2,1,"","load_mpl_outputs"],[1,2,1,"","load_outputs"],[1,2,1,"","load_run_inputs"],[1,3,1,"","name"],[1,2,1,"","process"],[1,2,1,"","register_callbacks"],[1,2,1,"","register_input"],[1,2,1,"","register_output"]],"deepcave.plugins.dynamic":[[2,1,1,"","DynamicPlugin"]],"deepcave.plugins.dynamic.DynamicPlugin":[[2,2,1,"","__call__"],[2,2,1,"","register_callbacks"]],"deepcave.plugins.static":[[3,1,1,"","PluginState"],[3,1,1,"","StaticPlugin"]],"deepcave.plugins.static.StaticPlugin":[[3,2,1,"","__call__"],[3,2,1,"","register_callbacks"]],"deepcave.runs":[[4,1,1,"","AbstractRun"],[4,5,1,"","NotMergeableError"],[4,5,1,"","NotValidRunError"],[4,1,1,"","Status"],[4,1,1,"","Trial"],[4,6,1,"","check_equality"],[5,0,0,"-","converters"],[9,0,0,"-","grouped_run"],[10,0,0,"-","handler"],[11,0,0,"-","objective"],[12,0,0,"-","recorder"],[13,0,0,"-","run"]],"deepcave.runs.AbstractRun":[[4,2,1,"","encode_config"],[4,2,1,"","get_budget"],[4,2,1,"","get_budgets"],[4,2,1,"","get_cost"],[4,2,1,"","get_costs"],[4,2,1,"","get_encoded_data"],[4,2,1,"","get_highest_budget"],[4,2,1,"","get_incumbent"],[4,2,1,"","get_objective"],[4,2,1,"","get_objective_id"],[4,2,1,"","get_objective_name"],[4,2,1,"","get_trajectory"],[4,4,1,"","hash"],[4,4,1,"","id"],[4,2,1,"","merge_costs"]],"deepcave.runs.converters":[[6,0,0,"-","bohb"],[7,0,0,"-","deepcave"],[8,0,0,"-","smac"]],"deepcave.runs.converters.bohb":[[6,1,1,"","BOHBRun"]],"deepcave.runs.converters.bohb.BOHBRun":[[6,2,1,"","from_path"],[6,4,1,"","hash"]],"deepcave.runs.converters.deepcave":[[7,1,1,"","DeepCAVERun"]],"deepcave.runs.converters.deepcave.DeepCAVERun":[[7,2,1,"","from_path"],[7,4,1,"","hash"]],"deepcave.runs.converters.smac":[[8,1,1,"","SMACRun"]],"deepcave.runs.converters.smac.SMACRun":[[8,2,1,"","from_path"],[8,4,1,"","hash"]],"deepcave.runs.grouped_run":[[9,1,1,"","GroupedRun"]],"deepcave.runs.grouped_run.GroupedRun":[[9,2,1,"","get_trajectory"],[9,4,1,"","hash"],[9,4,1,"","id"]],"deepcave.runs.handler":[[10,1,1,"","RunHandler"]],"deepcave.runs.handler.RunHandler":[[10,2,1,"","add_run"],[10,2,1,"","get_available_run_paths"],[10,2,1,"","get_grouped_runs"],[10,2,1,"","get_run"],[10,2,1,"","get_run_name"],[10,2,1,"","get_runs"],[10,2,1,"","get_selected_run_names"],[10,2,1,"","get_selected_run_paths"],[10,2,1,"","get_working_directory"],[10,2,1,"","remove_run"],[10,2,1,"","set_working_directory"],[10,2,1,"","update"],[10,2,1,"","update_groups"],[10,2,1,"","update_run"],[10,2,1,"","update_runs"]],"deepcave.runs.objective":[[11,1,1,"","Objective"]],"deepcave.runs.run":[[13,1,1,"","Run"]],"deepcave.runs.run.Run":[[13,2,1,"","add"],[13,2,1,"","from_path"],[13,4,1,"","id"]],deepcave:[[1,0,0,"-","plugins"],[4,0,0,"-","runs"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","property","Python property"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:property","5":"py:exception","6":"py:function"},terms:{"0":[13,16,17,18,19,20,22],"000":[16,17,18,19,20],"0001":[17,18],"1":[13,14,16,17,18,19,20,22,26],"10":[17,18],"100":[16,17,18],"127":22,"1307":18,"1e":18,"2":[18,26],"20":[16,17,18],"200":17,"20000":18,"28":18,"3":[18,19,20],"30":17,"3081":18,"32":18,"4":18,"40":[16,17],"40000":18,"5":[17,18],"50":17,"60":[16,17],"64":18,"70":17,"80":17,"8050":22,"90":17,"abstract":[1,4,13],"case":1,"class":[1,2,3,4,6,7,8,9,10,11,12,13,14,15,18,19,20],"default":[1,4,9,10,20],"do":[10,15,19,20,26],"enum":[3,4],"export":25,"float":[4,9,13],"function":[1,4,18],"import":[1,16,17,18,19,20,30,32,34],"int":[1,4,9,19,20],"long":14,"new":[6,7,8,10,13,14,24,31],"return":[1,2,3,4,6,7,8,9,10,13,14,17,18,19,20],"static":[1,31],"super":18,"switch":10,"true":[1,4,10,17,18,19,20,25],"while":31,A:[4,22,23],By:[4,9],For:[7,8,23,31],If:[1,2,3,4,6,7,8,9,10,13,15,22,25,26,29,31],In:[1,4,9,13,22,31],It:[1,24,31],No:18,Not:13,One:[1,29],The:[1,4,7,8,9,10,13,14,20,23,26,27,28,30,31,32],There:31,To:[14,15,29,34],With:33,__call__:[1,2,3],__init__:18,__main__:[17,18],__name__:[17,18,19,20],abc:[1,2,3,4,13],about:32,abstractrun:[1,4,9,10,13,19],access:22,accuraci:[16,17,18,23],across:1,action:22,activ:[17,25],activate_run_select:[1,20],ad:[13,27],adam:[17,18],add:[10,13,14,22,25,31],add_hyperparamet:[16,17,18],add_run:10,addit:[4,13,31],address:22,after:[1,4,14,22,31],afterward:25,aggress:23,algorithm:23,all:[1,2,3,4,10,15,33],alpha:16,alreadi:[10,13,26,31],also:[1,10,22,25,28,29,34],alwai:[4,6,9],an:[1,3,4,10,15,23,24,25,31],analys:31,analysi:24,analyz:[22,33],ani:[1,4,28,31],anyth:23,ar:[1,2,3,4,10,13,14,22,23,25,26,27,29,30,31,32],arbitrari:23,arg:9,argmax:18,aspect:31,assign:18,associ:22,attribut:[1,4,19],auto_scale_batch_s:18,automat:[10,14,25,31],automl:[15,24,25,27,28,29,31],avail:[1,4,10,31],available_convert:14,back:[1,2,3],background:31,base:[1,2,3,4,6,7,8,9,10,11,13,29],bash_profil:25,basic:[1,2,3,31],batch:18,batch_idx:18,batch_siz:[17,18],bayesian:23,becaus:1,befor:[1,20,21],behaviour:33,behind:[7,8],below:1,best:[28,29,34],beta:16,better:[4,23],between:[26,31],bia:27,black:23,block:[1,2,3,31],blub:13,bo:23,bohb:[14,24],bohbrun:6,bool:[1,4,10],both:[1,31],box:23,budget:[1,4,9,13,14,16,17,18,19,20,23,24,31],budget_id:[19,20],budget_opt:[19,20],budget_valu:20,build:15,button:[1,31],button_capt:1,cach:[1,4,6,7,8,9,10,31],calcul:[1,3,4,9,13,31],call:1,callabl:1,callback:[1,2,3],can:[1,4,10,14,15,22,24,27,31,33],caption:1,categoricalhyperparamet:17,cd:25,central:28,chang:[1,2,3,4,6,7,8,9,10,13,20,22,24,29,31],channel:18,check:[1,4,19,28,31,32],check_equ:[4,19],check_run_compat:1,check_runs_compat:[1,19],checklist:20,choic:17,chosen:[4,9,10],class_hint:10,classmethod:[1,6,7,8,13],classnam:[19,20],clear:[4,6,9,26],clf:17,click:[16,17,18,19,20],clone:25,code:[15,16,17,18,19,20],collect:22,column:4,com:25,combin:[4,13,22,23,24,29],combined_cost:4,command:22,common:[1,19],compat:[1,4],compon:[1,2,3],compos:18,comput:25,conda:25,config:[4,9,10,13,14,15,16,17,18,31],config_id:[4,9],configspac:[4,6,7,8,13,14,16,17,18,20,28],configur:[4,22,23,29,31,33,34],configurationspac:[16,17,18],configure_optim:18,consid:4,considerd:4,consist:23,constant:16,consum:3,contain:4,content:1,continu:26,contrast:[4,9,13,26,31],contribut:25,converg:26,convert:[4,10,22,24],core:23,correctli:[14,28],cost:[4,9,13,16,17,18,22,31],costs_mean:[4,9],costs_std:[4,9],could:[1,7,8,10],crash:32,creat:[1,10,13,14,25,31],crucial:27,cs:16,current:[1,4,6,7,8,9,10,14],custom:24,dash:[1,19,20,24],dash_bootstrap_compon:[19,20],dashboard:[22,24],data:[1,2,3,4,10,14,17,18,19,20,22,24,31,32],data_dir:18,data_structur:20,datafram:4,dataload:18,dataset:[17,18],dbc:[19,20],dcc:[19,20],decid:23,deepcav:[14,15,16,17,18,19,20,21,22,24,25,31],deepcaverun:7,def:[17,18,19,20],defin:[1,17,18,28],depend:[1,2,3,4],describ:31,descript:[1,19,20],design:31,detail:33,detailtli:31,detect:24,determinist:18,dev:25,deviat:[4,9,29],df:4,dialog:[1,2,3],dict:[1,4,10,11,13],dictionari:4,did:[14,22],differ:[4,31],digit:17,dim:18,dimension:31,direct:22,directli:[15,29],directoi:10,directori:[4,10,24],disable_spr:25,displai:[1,27,29,31,33],div:[19,20],divers:24,docstr:13,doe:31,done:[4,31],download:[15,16,17,18,19,20],dropdown:1,dropout:18,dwoiwod:13,dynam:[19,20,31],dynamic_plugin:[19,20],dynamicplugin:[2,19,20],e:[1,14],easi:[24,31],easili:22,effici:23,either:4,element:[1,2,3],enabl:25,encod:4,encode_config:4,encode_i:4,end:[16,17,18,31],end_tim:[4,13],enough:26,ensur:[4,6,9],enumer:[3,4],env:25,environ:25,epm:4,epoch:23,equal:4,error:[1,10],especi:[26,32],estim:30,evalu:[4,24],everi:[4,31],exampl:[7,8,16,17,18,19,20,23,31],examples_jupyt:15,examples_python:15,except:4,exclud:4,exist:13,exploit:23,explor:23,f:[18,25],fail:14,fals:[1,4,10,18],fanova:4,far:28,fast:31,featur:1,figur:[19,20,31],file:[4,7,8,9,10,13,14,31],fill:1,filter:[1,20,31],find:[23,26],finish:31,first:[1,4,25],fit:[17,18],flatten:18,flexibl:1,folder:14,follow:[1,2,3,4,14,15,22,25,31],fontawesom:1,format:[14,15,24],forward:18,found:[4,10,22,28],freedom:24,frequent:23,from:[1,4,7,8,10,14,16,17,18,19,20,24,27,31],from_path:[6,7,8,13,14],full:[16,17,18,19,20],further:[4,22],g:[1,14],gain:29,galleri:[16,17,18,19,20],gener:[1,16,17,18,19,20,24],get:[1,4,15,17,19,20],get_available_run_path:10,get_base_url:1,get_budget:[4,19,20],get_checklist_opt:20,get_configspac:[17,18],get_cost:4,get_dataset:17,get_encoded_data:4,get_filter_layout:[1,20],get_grouped_run:10,get_highest_budget:4,get_hyperparameter_nam:20,get_incumb:4,get_input_layout:[1,19,20],get_logg:[19,20],get_mpl_output_layout:1,get_object:[4,19,20],get_objective_id:4,get_objective_nam:[4,19,20],get_output_layout:[1,19,20],get_run:10,get_run_input_layout:1,get_run_nam:10,get_select_opt:[19,20],get_selected_run:1,get_selected_run_nam:10,get_selected_run_path:10,get_trajectori:[4,9],get_working_directori:10,getcwd:18,git:25,github:25,give:31,given:[4,9,34],global:[1,4,9,30],go:[19,20],goal:[29,31],goe:16,gpu:18,graph:[19,20],graph_obj:[19,20],group:[1,4,9,10,22,24,29],grouped_run:1,groupedrun:[1,9,10],ha:[4,6,9,31,32],handl:10,hash:[4,6,7,8,9,10,13,14],have:[1,7,8,14,15,21,22,25,31],height:18,here:[1,2,3,16,17,18,19,20],hidden_layer_s:17,high:[16,26,29],higher:26,highest:[4,9],histori:[7,8,13,14],hold:[4,6,9],how:[15,26,29,30,32],howev:29,hp1:4,hp2:4,hp_name:20,hp_valu:20,hpn:4,html:[19,20],http:[22,25],huge:31,human:[4,19,20],hyperparamet:[4,16,17,18,20,23,24,30,31,33],hyperparameter_nam:20,icon:1,id:[1,4,7,8,9,10,13,19,20],idea:[7,8,15],identifi:[1,4,9,13,27],imag:22,immedi:31,implement:4,includ:[4,10,15,23,24],include_combined_cost:4,include_config_id:4,include_group:10,incorpor:15,incumb:4,inf:13,influenc:[30,31],inform:[24,32],inherit:14,input:[1,2,3,13,14,19,20,31],insid:[10,14],insight:31,inspir:31,instal:[21,22],instanc:10,instanti:10,instruct:25,integ:4,intel:25,intenum:4,interact:[22,24],interest:[1,2,3],intern:[1,10,31],interpret:[14,22],involv:4,ipynb:[16,17,18,19,20],item:19,iter:[1,4],its:[1,4,23],itself:[4,31],join:18,json:[1,8,13],jsonl:[7,13],jupyt:[15,16,17,18,19,20],kei:10,know:32,kwarg:9,label:[19,20],larg:30,later:13,latest:[4,6,9],layer:15,layout:[1,2,3,19,20],learn:23,learning_r:[17,18],learning_rate_init:17,left:31,len:[19,20],length:4,let:[32,33],lightningmodul:18,like:[13,34],limit:23,linear:18,list:[1,2,3,4,9,10,13,19],load:[1,10],load_dependency_input:[1,20],load_digit:17,load_input:[1,19,20],load_mpl_output:1,load_output:[1,19,20],load_run_input:1,locat:31,log:[15,16,17,18,19,20],log_softmax:18,logger:[19,20],logist:17,logit:18,longer:[26,31],look:[4,10,22,31],loss:[18,23],lot:[1,24,31],low:[16,26,31],lower:[4,11,16,17,18,26],lr:18,mac:25,machin:23,made:3,main:[22,23],make:[4,14,15,19,20,21,25],make_classif:17,mani:[24,32],map:[1,31],matplotlib:[1,24],max_epoch:18,max_it:17,maxim:23,mb:[19,20],mean:29,mechan:23,merg:[4,10],merge_cost:4,mergeabl:4,meta:[4,6,7,8,10,13,14,32],method:[1,14,20,26,30],metric:23,might:31,minim:[15,23,31],minimal_run:16,minimum:23,minut:[16,17,18,19,20],mlp:[17,18],mlp_pytorch:18,mlpclassifi:17,mnist:18,mnist_ful:18,mnist_test:18,mnist_train:18,mnist_val:18,model:[4,13,18,27,31],model_select:17,modul:[1,4,5],more:[4,24,31],moreov:[1,28],most:[23,32],move:27,mpl:1,multi:[15,25,31],multipl:[4,15,26,29],multiple_run:19,multiplerun:19,must:[1,4],name:[1,4,6,7,8,9,10,11,13,16,17,18,19,20],nativ:14,navig:1,necessari:1,need:[1,14,20,25,26,31],network:[23,26],neural:[23,26],neural_network:17,never:20,new_input:20,next:[14,31],nll_loss:18,nn:18,non:25,none:[1,3,4,6,7,8,9,10,11,13,16,17,18,19,20],normal:[4,18],note:[1,4],notebook:[15,16,17,18,19,20],noth:10,notmergeableerror:[1,4,10],notvalidrunerror:[4,10],np:[16,17],num_class:18,num_config:[17,18],num_neuron:18,num_neurons_layer1:[17,18],num_neurons_layer2:[17,18],num_run:[17,18],num_sanity_val_step:18,number:[4,27,29],numpi:[16,17],obj1:4,obj2:4,objc_disable_initialize_fork_safeti:25,object:[1,4,6,7,8,9,10,13,14,16,17,18,19,20,23,29,31,32,33,34],objective_id:4,objective_nam:[19,20],objective_opt:[19,20],objective_valu:20,objet:20,objm:4,onc:22,one:[1,4,10,15,26,30,31],onli:[1,4,10,20,31,34],optim:[11,16,17,18,23],option:[1,4,9,10,19,20,31],origin:[4,13],os:18,other:[17,18,20,31,34],otherwis:[1,10],our:31,out:26,outdat:13,output:[1,4,19,20,24,31],over:[27,31],overwritten:13,own:15,packag:25,page:22,paramet:[1,4,9,10,18,23],pars:1,part:28,particular:[1,2,3],particularli:[4,9],pass:[1,4,10],past:[1,2,3],path:[6,7,8,10,13,14,18],pd:4,peak:29,perceptron:15,perfect:32,perform:[23,24,26,29,31,33,34],pl:18,placehold:[19,20],pleas:[15,22],plotli:[19,20],plugin:[10,19,20,24,28,29,32,33],pluginst:3,point:31,port:22,posit:1,possibl:1,power:18,pre:[1,20],pred:18,predict:4,prepar:[1,20],prepare_data:18,pretti:31,prevent:1,preventupd:1,previou:1,previous_input:[1,20],process:[1,4,19,20,25],prog_bar:18,progress:31,properti:[4,6,7,8,9,13],provid:[1,14,15,31],put:14,py:[14,15,16,17,18,19,20,31],pyrfr:4,python:[15,16,17,18,19,20],pytorch:15,pytorch_lightn:18,queue:[3,31],r:[16,17,18],race:23,rais:[1,4,10],ram:13,random:16,random_split:18,random_st:17,rang:[17,18,19,20],raw:[1,2,3,24,31],reach:26,read:[1,7,8],readabl:4,readi:10,real:24,recommend:31,record:[17,18],redi:[21,25],refer:[10,31],regist:[1,2,3,19,20,31],register_callback:[1,2,3],register_input:1,register_output:1,registr:1,relev:32,relu:[17,18],remov:10,remove_run:10,render:31,render_button:1,replac:26,request:4,requir:31,restrict:23,result:[1,4,6,9,13,15,18,19,20,31],right:[10,14],run:[1,14,15,17,18,22,24,27,28,29,31,32],run_cach:10,run_id:[10,17,18],run_nam:[7,8,19],run_path:10,runhandl:10,runtimeerror:[4,10],s:[13,18,21,32],same:[1,4,31],sample_configur:[16,17,18],saniti:[18,31,32],save:[10,15],save_path:[16,17,18],score:[17,18],script:[16,17,18,19,20],second:[16,17,18,19,20,31],see:[15,22,24,27,29,32],seed:[16,17,18],seed_everyth:18,select:[1,4,9,10,14,19,20,22,24,27,32,34],selected_run:[1,20],self:[1,10,18,19,20],separ:1,sequenti:18,serializ:[1,19,20],serv:[31,32],server:[1,21,25],set:[1,10,19,20],set_working_directori:10,setup:18,sgd:17,share:19,should:[1,4,9,10,13,14,23,31],show:[1,31,32,34],shown:1,sidebar:31,similar:33,simpli:31,sinc:[1,29,31],singl:[1,15,30],single_run:20,singlerun:20,size:16,sklearn:17,smac:[14,23,24],smacrun:8,so:[1,14,15,28,31],solver:17,some:[19,20,31],someth:[1,19],sometim:[33,34],sourc:[1,2,3,4,6,7,8,9,10,11,13,15,16,17,18,19,20],space:[28,31],specif:[4,31],specifi:[1,4],sphinx:[16,17,18,19,20],stack:[1,2,3],stage:18,standard:[4,9,29],start:[1,15,16,17,18,21,31],start_tim:[4,13],stati:4,staticmethod:[19,20],staticplugin:[1,3],statist:32,statu:[4,13,31],status:4,stem:10,step:22,still:26,str:[1,4,6,7,8,9,10,13],stratifi:17,string:[1,4],stuff:20,subset:23,success:13,suffici:26,suitabl:34,support:[4,13,14,24,29],sure:[14,15,19,20,21,25],surrog:27,swig:25,take:31,tanh:17,target:17,task:3,tell:[28,30],templat:31,tend:33,test:[18,19,20],test_dataload:18,test_step:18,than:31,thei:[4,32],them:[1,4,22],thereaft:31,therefor:[24,32],thi:[1,2,3,4,6,9,13,14,20,28,29,31,32,33],three:31,throughout:[4,9,13],thrown:[1,10],till:26,time:[1,3,4,9,14,16,17,18,19,20,24,27,31,34],titl:1,todo:13,too:[4,29],tool:[23,24],torch:18,torchmetr:18,torchvis:18,total:[16,17,18,19,20],totensor:18,train:[18,26,31],train_dataload:18,train_test_split:17,trainer:18,training_step:18,trajectori:[4,9],transform:[10,18],tree:[4,31],trial:[4,7,8,9,14,22],trigger:31,tupl:4,two:[4,14,23,34],type:[1,2,3,4,6,7,8,9,10,13,19],understand:31,uniform:16,uniformfloathyperparamet:[16,17,18],uniformintegerhyperparamet:[17,18],union:[1,4,9,10],uniqu:[1,14],up:[1,2,3,4,31],updat:[7,8,10,24,31],update_dict:20,update_group:10,update_run:10,upper:[11,16,17,18],url:1,us:[1,2,3,4,9,10,13,14,15,18,20,22,23,26,29,31,33],user:[1,20],util:[18,19,20],v1:14,val:18,val_acc:18,val_dataload:18,val_loss:18,valid:[4,18,22],validation_step:18,valu:[1,3,4,10,16,19,20],valueerror:4,variabl:1,via:[15,22,24,25],view:1,visual:[24,29,31],wa:[4,10,20,26,28,31],wai:[30,31,32],want:[4,15,22,25,29],we:[7,8,31],weigh:23,weight:4,well:[26,33],were:4,what:[13,21],when:[26,31],where:27,wherea:23,whether:4,which:[1,4,10,22,23,25,29,31],width:18,wise:31,work:[10,24,31],working_dir:[7,8],working_directori:10,worst:13,wrapper:4,write:24,wrong:21,x:[17,18],x_test:17,x_train:17,y:[4,17,18],y_test:17,y_train:17,ye:25,yml:25,you:[1,14,15,20,21,22,25,26,27,28,29,30,31,32,33,34],your:[15,16,25,27,29,31,32],zip:15},titles:["API References","deepcave.plugins","deepcave.plugins.dynamic","deepcave.plugins.static","deepcave.runs","deepcave.runs.converters","deepcave.runs.converters.bohb","deepcave.runs.converters.deepcave","deepcave.runs.converters.smac","deepcave.runs.grouped_run","deepcave.runs.handler","deepcave.runs.objective","deepcave.runs.recorder","deepcave.runs.run","Converters","Examples","Record Minimal Run","Multi-Layer Perceptron","Multi-Layer Perceptron via PyTorch","Multiple Runs","Single Run","Frequently Asked Questions","Getting Started","Glossary","Home","Installation","Budget Correlation","Configuration Cube","Configurations","Cost Over Time","fANOVA","Plugins","Overview","Parallel Coordinates","Pareto Front"],titleterms:{"static":3,api:0,ask:21,bohb:6,budget:26,configur:[27,28],convert:[5,6,7,8,14],coordin:33,correl:26,cost:29,cube:27,custom:[14,31],deepcav:[1,2,3,4,5,6,7,8,9,10,11,12,13],dynam:2,exampl:15,fanova:30,featur:24,frequent:21,front:34,get:22,glossari:23,grouped_run:9,handler:10,home:24,instal:25,layer:[17,18],minim:16,multi:[17,18],multipl:19,object:11,over:29,overview:32,parallel:33,pareto:34,perceptron:[17,18],plugin:[1,2,3,15,31],pytorch:18,question:21,record:[12,15,16],refer:0,run:[4,5,6,7,8,9,10,11,12,13,16,19,20],singl:20,smac:8,start:22,structur:31,templat:15,time:29,type:31,via:18}})