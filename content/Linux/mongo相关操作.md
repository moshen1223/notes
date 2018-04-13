数据备份    
    语法：mongodump -h dbhost -d dbname -o dbdirectory    
    参数说明：    
            -h： MongDB所在服务器地址    
            -d： 需要备份的数据库实例    
            -o： 备份的数据存放位置    
数据恢复    
    语法：mongorestore -h dbhost -d dbname --dir dbdirectory     
    参数或名：    
            -h： MongoDB所在服务器地址    
            -d： 需要恢复的数据库实例    
            --dir： 备份数据所在位置
