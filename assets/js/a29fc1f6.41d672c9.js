"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[3177],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,y=u["".concat(i,".").concat(c)]||u[c]||k[c]||p;return a?r.createElement(y,l(l({ref:t},m),{},{components:a})):r.createElement(y,l({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<p;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35052:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const p={},l=void 0,o={unversionedId:"Software/AI/DataEngineer/pysparkExample",id:"Software/AI/DataEngineer/pysparkExample",title:"pysparkExample",description:"PySpark \u662f Apache Spark \u7684 Python API\uff0c\u5b83\u5141\u8a31\u4f60\u4f7f\u7528 Python \u4f86\u57f7\u884c\u5206\u6563\u5f0f\u6578\u64da\u8655\u7406\u548c\u5927\u6578\u64da\u5206\u6790\u3002PySpark \u63d0\u4f9b\u4e86\u8207\u539f\u751f Spark \u76f8\u540c\u7684\u529f\u80fd\uff0c\u4f46\u7528 Python \u8a9e\u6cd5\u9032\u884c\u64cd\u4f5c\uff0c\u9069\u5408 Python \u958b\u767c\u8005\u548c\u6578\u64da\u79d1\u5b78\u5bb6\u3002",source:"@site/docs/Software/AI/DataEngineer/pysparkExample.md",sourceDirName:"Software/AI/DataEngineer",slug:"/Software/AI/DataEngineer/pysparkExample",permalink:"/goldfish-memory/docs/Software/AI/DataEngineer/pysparkExample",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/AI/DataEngineer/pysparkExample.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/goldfish-memory/docs/Software/AI/DataEngineer/intro"},next:{title:"pysparkHouseExample",permalink:"/goldfish-memory/docs/Software/AI/DataEngineer/pysparkHouseExample"}},i={},s=[{value:"1. <strong>PySpark \u4ecb\u7d39</strong>",id:"1-pyspark-\u4ecb\u7d39",level:3},{value:"2. <strong>PySpark \u7684\u61c9\u7528\u5834\u666f</strong>",id:"2-pyspark-\u7684\u61c9\u7528\u5834\u666f",level:3},{value:"3. <strong>PySpark \u5b89\u88dd</strong>",id:"3-pyspark-\u5b89\u88dd",level:3},{value:"4. <strong>PySpark \u61c9\u7528\u7bc4\u4f8b</strong>",id:"4-pyspark-\u61c9\u7528\u7bc4\u4f8b",level:3},{value:"4.1 \u7c21\u55ae\u7684 Word Count \u7bc4\u4f8b",id:"41-\u7c21\u55ae\u7684-word-count-\u7bc4\u4f8b",level:4},{value:"4.2 \u4f7f\u7528 DataFrame \u9032\u884c\u6578\u64da\u8655\u7406",id:"42-\u4f7f\u7528-dataframe-\u9032\u884c\u6578\u64da\u8655\u7406",level:4},{value:"4.3 \u4f7f\u7528 PySpark MLlib \u9032\u884c\u6a5f\u5668\u5b78\u7fd2",id:"43-\u4f7f\u7528-pyspark-mllib-\u9032\u884c\u6a5f\u5668\u5b78\u7fd2",level:4},{value:"5. <strong>PySpark \u4e3b\u8981\u512a\u52e2</strong>",id:"5-pyspark-\u4e3b\u8981\u512a\u52e2",level:3}],m={toc:s};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PySpark")," \u662f ",(0,n.kt)("strong",{parentName:"p"},"Apache Spark")," \u7684 Python API\uff0c\u5b83\u5141\u8a31\u4f60\u4f7f\u7528 Python \u4f86\u57f7\u884c\u5206\u6563\u5f0f\u6578\u64da\u8655\u7406\u548c\u5927\u6578\u64da\u5206\u6790\u3002PySpark \u63d0\u4f9b\u4e86\u8207\u539f\u751f Spark \u76f8\u540c\u7684\u529f\u80fd\uff0c\u4f46\u7528 Python \u8a9e\u6cd5\u9032\u884c\u64cd\u4f5c\uff0c\u9069\u5408 Python \u958b\u767c\u8005\u548c\u6578\u64da\u79d1\u5b78\u5bb6\u3002"),(0,n.kt)("h3",{id:"1-pyspark-\u4ecb\u7d39"},"1. ",(0,n.kt)("strong",{parentName:"h3"},"PySpark \u4ecb\u7d39")),(0,n.kt)("p",null,"PySpark \u662f Spark \u6838\u5fc3\u7684 Python \u63a5\u53e3\uff0c\u652f\u6301 Spark \u63d0\u4f9b\u7684\u5206\u6563\u5f0f\u8a08\u7b97\u80fd\u529b\uff0c\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RDD (Resilient Distributed Dataset)"),"\uff1a\u4e00\u7a2e\u5206\u6563\u5f0f\u3001\u5bb9\u932f\u7684\u6578\u64da\u7d50\u69cb\uff0c\u5141\u8a31\u4e26\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DataFrame"),"\uff1a\u985e\u4f3c\u65bc pandas DataFrame \u7684\u5206\u6563\u5f0f\u6578\u64da\u7d50\u69cb\uff0c\u9069\u5408\u9032\u884c\u7d50\u69cb\u5316\u6578\u64da\u8655\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Spark SQL"),"\uff1a\u7528\u65bc\u8655\u7406\u7d50\u69cb\u5316\u6578\u64da\uff0c\u63d0\u4f9b\u4e86\u985e\u4f3c SQL \u7684\u67e5\u8a62\u529f\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Streaming"),"\uff1a\u652f\u6301\u5be6\u6642\u6d41\u6578\u64da\u8655\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"MLlib"),"\uff1a\u5167\u5efa\u7684\u6a5f\u5668\u5b78\u7fd2\u5eab\uff0c\u652f\u6301\u5927\u898f\u6a21\u6a5f\u5668\u5b78\u7fd2\u4efb\u52d9\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"GraphX"),"\uff1a\u5716\u5f62\u8655\u7406\u5eab\uff0c\u7528\u65bc\u9032\u884c\u5206\u6563\u5f0f\u5716\u5f62\u8a08\u7b97\u3002")),(0,n.kt)("h3",{id:"2-pyspark-\u7684\u61c9\u7528\u5834\u666f"},"2. ",(0,n.kt)("strong",{parentName:"h3"},"PySpark \u7684\u61c9\u7528\u5834\u666f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5927\u6578\u64da\u8655\u7406"),"\uff1a\u80fd\u5920\u8655\u7406\u548c\u5206\u6790 TB \u7d1a\u751a\u81f3 PB \u7d1a\u7684\u6578\u64da\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ETL \u6d41\u7a0b"),"\uff1a\u53ef\u4ee5\u7528\u4f86\u69cb\u5efa\u5206\u6563\u5f0f\u7684 Extract, Transform, Load (ETL) \u7ba1\u9053\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5be6\u6642\u6578\u64da\u8655\u7406"),"\uff1a\u4f7f\u7528 PySpark Streaming\uff0c\u53ef\u4ee5\u5c0d\u5be6\u6642\u6578\u64da\u9032\u884c\u8655\u7406\uff0c\u5982\u65e5\u5fd7\u5206\u6790\u3001\u9ede\u64ca\u6d41\u5206\u6790\u7b49\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6a5f\u5668\u5b78\u7fd2"),"\uff1a\u4f7f\u7528 PySpark MLlib \u57f7\u884c\u5206\u6563\u5f0f\u6a5f\u5668\u5b78\u7fd2\u8a13\u7df4\uff0c\u9069\u5408\u5927\u6578\u64da\u96c6\u7684\u9810\u6e2c\u6a21\u578b\u69cb\u5efa\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5927\u898f\u6a21 SQL \u67e5\u8a62"),"\uff1a\u901a\u904e Spark SQL\uff0c\u80fd\u5920\u5c0d\u5927\u578b\u7d50\u69cb\u5316\u548c\u534a\u7d50\u69cb\u5316\u6578\u64da\u9032\u884c\u9ad8\u6548\u67e5\u8a62\u3002")),(0,n.kt)("h3",{id:"3-pyspark-\u5b89\u88dd"},"3. ",(0,n.kt)("strong",{parentName:"h3"},"PySpark \u5b89\u88dd")),(0,n.kt)("p",null,"\u53ef\u4ee5\u901a\u904e ",(0,n.kt)("inlineCode",{parentName:"p"},"pip")," \u5b89\u88dd PySpark\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pyspark\n")),(0,n.kt)("h3",{id:"4-pyspark-\u61c9\u7528\u7bc4\u4f8b"},"4. ",(0,n.kt)("strong",{parentName:"h3"},"PySpark \u61c9\u7528\u7bc4\u4f8b")),(0,n.kt)("h4",{id:"41-\u7c21\u55ae\u7684-word-count-\u7bc4\u4f8b"},"4.1 \u7c21\u55ae\u7684 Word Count \u7bc4\u4f8b"),(0,n.kt)("p",null,"\u9019\u662f PySpark \u4e2d\u7d93\u5178\u7684\u55ae\u8a5e\u8a08\u6578\u7bc4\u4f8b\uff0c\u5c55\u793a\u5982\u4f55\u4f7f\u7528 RDD \u9032\u884c\u64cd\u4f5c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark import SparkContext\n\n# \u521d\u59cb\u5316 SparkContext\nsc = SparkContext("local", "Word Count Example")\n\n# \u52a0\u8f09\u6587\u672c\u6587\u4ef6\ntext_file = sc.textFile("path/to/your/textfile.txt")\n\n# \u9032\u884c\u55ae\u8a5e\u8a08\u6578\ncounts = text_file.flatMap(lambda line: line.split(" ")) \\\n                  .map(lambda word: (word, 1)) \\\n                  .reduceByKey(lambda a, b: a + b)\n\n# \u986f\u793a\u7d50\u679c\nfor word, count in counts.collect():\n    print(f"{word}: {count}")\n')),(0,n.kt)("h4",{id:"42-\u4f7f\u7528-dataframe-\u9032\u884c\u6578\u64da\u8655\u7406"},"4.2 \u4f7f\u7528 DataFrame \u9032\u884c\u6578\u64da\u8655\u7406"),(0,n.kt)("p",null,"PySpark \u7684 DataFrame \u662f\u4e00\u7a2e\u9ad8\u7d1a API\uff0c\u5b83\u985e\u4f3c\u65bc pandas \u7684 DataFrame\uff0c\u4f46\u80fd\u5920\u8655\u7406\u5206\u6563\u5f0f\u6578\u64da\u3002\u9019\u88e1\u5c55\u793a\u5982\u4f55\u4f7f\u7528 PySpark \u7684 DataFrame \u4f86\u8655\u7406\u7d50\u69cb\u5316\u6578\u64da\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql import SparkSession\n\n# \u5275\u5efa SparkSession\nspark = SparkSession.builder.appName("DataFrame Example").getOrCreate()\n\n# \u5275\u5efa DataFrame\ndata = [("James", "Smith", "USA", 30),\n        ("Michael", "Rose", "USA", 45),\n        ("Robert", "Williams", "UK", 35)]\n\ncolumns = ["First Name", "Last Name", "Country", "Age"]\n\ndf = spark.createDataFrame(data, columns)\n\n# \u986f\u793a DataFrame \u7684\u5167\u5bb9\ndf.show()\n\n# \u7be9\u9078\u689d\u4ef6\ndf.filter(df["Age"] > 30).show()\n\n# \u805a\u5408\u64cd\u4f5c\uff1a\u6309\u570b\u5bb6\u8a08\u7b97\u5e73\u5747\u5e74\u9f61\ndf.groupBy("Country").avg("Age").show()\n')),(0,n.kt)("p",null,"\u8f38\u51fa\u5c07\u986f\u793a\u6bcf\u500b\u4eba\u7684\u6578\u64da\u4ee5\u53ca\u7be9\u9078\u548c\u805a\u5408\u7d50\u679c\u3002"),(0,n.kt)("h4",{id:"43-\u4f7f\u7528-pyspark-mllib-\u9032\u884c\u6a5f\u5668\u5b78\u7fd2"},"4.3 \u4f7f\u7528 PySpark MLlib \u9032\u884c\u6a5f\u5668\u5b78\u7fd2"),(0,n.kt)("p",null,"\u9019\u662f PySpark \u7684 MLlib \u5eab\u7684\u7c21\u55ae\u61c9\u7528\uff0c\u4f7f\u7528\u908f\u8f2f\u56de\u6b78\u4f86\u9032\u884c\u5206\u985e\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql import SparkSession\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.ml.feature import VectorAssembler\n\n# \u5275\u5efa SparkSession\nspark = SparkSession.builder.appName("MLlib Example").getOrCreate()\n\n# \u5275\u5efa\u7bc4\u4f8b\u6578\u64da\u96c6\ndata = [(0, 1.0, 2.0, 3.0),\n        (1, 4.0, 5.0, 6.0),\n        (0, 7.0, 8.0, 9.0)]\n\ncolumns = ["label", "feature1", "feature2", "feature3"]\ndf = spark.createDataFrame(data, columns)\n\n# \u69cb\u5efa\u7279\u5fb5\u5411\u91cf\nassembler = VectorAssembler(inputCols=["feature1", "feature2", "feature3"], outputCol="features")\ndf = assembler.transform(df)\n\n# \u69cb\u5efa\u908f\u8f2f\u56de\u6b78\u6a21\u578b\nlr = LogisticRegression(featuresCol="features", labelCol="label")\n\n# \u8a13\u7df4\u6a21\u578b\nmodel = lr.fit(df)\n\n# \u986f\u793a\u6a21\u578b\u7d50\u679c\nprint("Coefficients: " + str(model.coefficients))\nprint("Intercept: " + str(model.intercept))\n')),(0,n.kt)("p",null,"\u9019\u500b\u7bc4\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u4f7f\u7528 PySpark MLlib \u9032\u884c\u7c21\u55ae\u7684\u6a5f\u5668\u5b78\u7fd2\u5efa\u6a21\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u66f4\u591a\u7684\u8cc7\u6599\u96c6\u548c\u66f4\u8907\u96dc\u7684\u7b97\u6cd5\u4f86\u9032\u884c\u6578\u64da\u5206\u6790\u548c\u9810\u6e2c\u3002"),(0,n.kt)("h3",{id:"5-pyspark-\u4e3b\u8981\u512a\u52e2"},"5. ",(0,n.kt)("strong",{parentName:"h3"},"PySpark \u4e3b\u8981\u512a\u52e2")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u64f4\u5c55\u6027"),"\uff1a\u53ef\u4ee5\u8f15\u9b06\u8655\u7406\u975e\u5e38\u5927\u898f\u6a21\u7684\u6578\u64da\u96c6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u591a\u529f\u80fd"),"\uff1a\u652f\u6301\u6279\u91cf\u8655\u7406\u3001\u6d41\u8655\u7406\u3001SQL \u67e5\u8a62\u3001\u6a5f\u5668\u5b78\u7fd2\u548c\u5716\u5f62\u8655\u7406\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u9ad8\u6548"),"\uff1a\u5229\u7528\u5167\u5b58\u4f86\u63d0\u9ad8\u8a08\u7b97\u901f\u5ea6\uff0c\u4e26\u4e14\u652f\u63f4\u591a\u500b\u6578\u64da\u6e90\uff08HDFS\u3001S3\u3001JDBC\u3001Parquet \u7b49\uff09\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6574\u5408\u6027"),"\uff1a\u8207 Hadoop \u517c\u5bb9\uff0c\u53ef\u4ee5\u4f7f\u7528\u540c\u6a23\u7684\u6578\u64da\u6e90\u548c\u57fa\u790e\u8a2d\u65bd\u3002")),(0,n.kt)("p",null,"PySpark \u662f\u4e00\u500b\u5f37\u5927\u7684\u5de5\u5177\uff0c\u7279\u5225\u9069\u5408\u8655\u7406\u5927\u578b\u6578\u64da\u96c6\u548c\u9032\u884c\u5206\u6563\u5f0f\u6578\u64da\u8655\u7406\u3002"))}k.isMDXComponent=!0}}]);