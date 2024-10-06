"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[5541],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),i=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(a),c=n,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return a?r.createElement(k,o(o({ref:t},m),{},{components:a})):r.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=a(87462),n=(a(67294),a(3905));const l={},o=void 0,s={unversionedId:"Software/AI/DataEngineer/pysparkHouseExample",id:"Software/AI/DataEngineer/pysparkHouseExample",title:"pysparkHouseExample",description:"PySpark \u623f\u50f9\u9810\u6e2c\u7bc4\u4f8b\u548c\u8a73\u7d30\u6b65\u9a5f",source:"@site/docs/Software/AI/DataEngineer/pysparkHouseExample.md",sourceDirName:"Software/AI/DataEngineer",slug:"/Software/AI/DataEngineer/pysparkHouseExample",permalink:"/docs/Software/AI/DataEngineer/pysparkHouseExample",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Software/AI/DataEngineer/pysparkHouseExample.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pysparkExample",permalink:"/docs/Software/AI/DataEngineer/pysparkExample"},next:{title:"sparkRoadMap",permalink:"/docs/Software/AI/DataEngineer/sparkRoadMap"}},p={},i=[{value:"<strong>\u6b65\u9a5f 1\uff1a\u8a2d\u5b9a PySpark \u74b0\u5883</strong>",id:"\u6b65\u9a5f-1\u8a2d\u5b9a-pyspark-\u74b0\u5883",level:3},{value:"<strong>\u6b65\u9a5f 2\uff1a\u8f09\u5165\u4e26\u63a2\u7d22\u6578\u64da\u96c6</strong>",id:"\u6b65\u9a5f-2\u8f09\u5165\u4e26\u63a2\u7d22\u6578\u64da\u96c6",level:3},{value:"<strong>\u6b65\u9a5f 3\uff1a\u6578\u64da\u9810\u8655\u7406</strong>",id:"\u6b65\u9a5f-3\u6578\u64da\u9810\u8655\u7406",level:3},{value:"<strong>\u6b65\u9a5f 4\uff1a\u5283\u5206\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6</strong>",id:"\u6b65\u9a5f-4\u5283\u5206\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6",level:3},{value:"<strong>\u6b65\u9a5f 5\uff1a\u5efa\u7acb\u4e26\u8a13\u7df4\u56de\u6b78\u6a21\u578b</strong>",id:"\u6b65\u9a5f-5\u5efa\u7acb\u4e26\u8a13\u7df4\u56de\u6b78\u6a21\u578b",level:3},{value:"<strong>\u6b65\u9a5f 6\uff1a\u8a55\u4f30\u6a21\u578b</strong>",id:"\u6b65\u9a5f-6\u8a55\u4f30\u6a21\u578b",level:3},{value:"<strong>\u6b65\u9a5f 7\uff1a\u9032\u884c\u9810\u6e2c\uff08\u53ef\u9078\uff09</strong>",id:"\u6b65\u9a5f-7\u9032\u884c\u9810\u6e2c\u53ef\u9078",level:3},{value:"<strong>\u5b8c\u6574\u4ee3\u78bc\u7bc4\u4f8b</strong>",id:"\u5b8c\u6574\u4ee3\u78bc\u7bc4\u4f8b",level:3},{value:"<strong>\u6b65\u9a5f\u89e3\u91cb</strong>",id:"\u6b65\u9a5f\u89e3\u91cb",level:3},{value:"<strong>\u6ce8\u610f\u4e8b\u9805</strong>",id:"\u6ce8\u610f\u4e8b\u9805",level:3},{value:"<strong>\u7e3d\u7d50</strong>",id:"\u7e3d\u7d50",level:3}],m={toc:i};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PySpark \u623f\u50f9\u9810\u6e2c\u7bc4\u4f8b\u548c\u8a73\u7d30\u6b65\u9a5f")),(0,n.kt)("p",null,"\u5728\u9019\u500b\u7bc4\u4f8b\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528 PySpark \u4f86\u5efa\u7acb\u4e00\u500b\u9810\u6e2c\u623f\u50f9\u7684\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002\u6211\u5011\u5c07\u4f7f\u7528\u52a0\u5dde\u623f\u50f9\u6578\u64da\u96c6\uff08California Housing Dataset\uff09\uff0c\u8a72\u6578\u64da\u96c6\u5305\u542b\u4e86\u7f8e\u570b\u4eba\u53e3\u666e\u67e5\u5c40\u6536\u96c6\u7684\u52a0\u5dde\u4f4f\u623f\u76f8\u95dc\u8cc7\u8a0a\u3002"),(0,n.kt)("p",null,"\u6211\u5011\u5c07\u9075\u5faa\u4ee5\u4e0b\u6b65\u9a5f\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u8a2d\u5b9a PySpark \u74b0\u5883")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u8f09\u5165\u4e26\u63a2\u7d22\u6578\u64da\u96c6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u6578\u64da\u9810\u8655\u7406")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5283\u5206\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u5efa\u7acb\u4e26\u8a13\u7df4\u56de\u6b78\u6a21\u578b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u8a55\u4f30\u6a21\u578b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"\u9032\u884c\u9810\u6e2c\uff08\u53ef\u9078\uff09"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-1\u8a2d\u5b9a-pyspark-\u74b0\u5883"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 1\uff1a\u8a2d\u5b9a PySpark \u74b0\u5883")),(0,n.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u9700\u8981\u5c0e\u5165\u5fc5\u8981\u7684\u5eab\u4e26\u5275\u5efa\u4e00\u500b SparkSession\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql import SparkSession\n\n# \u5275\u5efa SparkSession\nspark = SparkSession.builder \\\n    .appName("HousePricePrediction") \\\n    .getOrCreate()\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-2\u8f09\u5165\u4e26\u63a2\u7d22\u6578\u64da\u96c6"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 2\uff1a\u8f09\u5165\u4e26\u63a2\u7d22\u6578\u64da\u96c6")),(0,n.kt)("p",null,"\u6211\u5011\u5c07\u6578\u64da\u96c6\u8f09\u5165 PySpark \u7684 DataFrame \u4e2d\u3002\u5047\u8a2d\u4f60\u5df2\u7d93\u4e0b\u8f09\u4e86\u52a0\u5dde\u623f\u50f9\u6578\u64da\u96c6\uff08\u53ef\u4ee5\u5f9e ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/camnugent/california-housing-prices"},"Kaggle")," \u7372\u53d6\uff09\uff0c\u4e26\u5c07 ",(0,n.kt)("inlineCode",{parentName:"p"},"california_housing.csv")," \u653e\u5728\u53ef\u8a2a\u554f\u7684\u76ee\u9304\u4e2d\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# \u8f09\u5165\u6578\u64da\u96c6\ndata = spark.read.csv("path/to/california_housing.csv", header=True, inferSchema=True)\n\n# \u986f\u793a\u524d\u4e94\u884c\ndata.show(5)\n\n# \u6253\u5370\u6578\u64da\u7d50\u69cb\ndata.printSchema()\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-3\u6578\u64da\u9810\u8655\u7406"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 3\uff1a\u6578\u64da\u9810\u8655\u7406")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.1 \u6aa2\u67e5\u7f3a\u5931\u503c")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import col, sum\n\n# \u8a08\u7b97\u6bcf\u5217\u7684\u7f3a\u5931\u503c\u6578\u91cf\ndata.select([sum(col(c).isNull().cast("int")).alias(c) for c in data.columns]).show()\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.2 \u8655\u7406\u7f3a\u5931\u503c")),(0,n.kt)("p",null,"\u5047\u8a2d ",(0,n.kt)("inlineCode",{parentName:"p"},"total_bedrooms")," \u5217\u6709\u7f3a\u5931\u503c\uff0c\u6211\u5011\u53ef\u4ee5\u7528\u8a72\u5217\u7684\u5e73\u5747\u503c\u9032\u884c\u586b\u5145\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql.functions import mean\n\nmean_total_bedrooms = data.select(mean(data['total_bedrooms'])).collect()[0][0]\ndata = data.na.fill({'total_bedrooms': mean_total_bedrooms})\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3.3 \u7279\u5fb5\u7d44\u5408")),(0,n.kt)("p",null,"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"VectorAssembler")," \u5c07\u7279\u5fb5\u7d44\u5408\u6210\u4e00\u500b\u5411\u91cf\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml.feature import VectorAssembler\n\nfeature_columns = ['longitude', 'latitude', 'housing_median_age', 'total_rooms',\n                   'total_bedrooms', 'population', 'households', 'median_income']\n\nassembler = VectorAssembler(inputCols=feature_columns, outputCol='features')\ndata = assembler.transform(data)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-4\u5283\u5206\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 4\uff1a\u5283\u5206\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u9078\u64c7\u7279\u5fb5\u548c\u6a19\u7c64\nfinal_data = data.select('features', 'median_house_value')\n\n# \u5283\u5206\u6578\u64da\u96c6\ntrain_data, test_data = final_data.randomSplit([0.8, 0.2], seed=42)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-5\u5efa\u7acb\u4e26\u8a13\u7df4\u56de\u6b78\u6a21\u578b"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 5\uff1a\u5efa\u7acb\u4e26\u8a13\u7df4\u56de\u6b78\u6a21\u578b")),(0,n.kt)("p",null,"\u6211\u5011\u5c07\u4f7f\u7528\u7dda\u6027\u56de\u6b78\u6a21\u578b\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml.regression import LinearRegression\n\n# \u521d\u59cb\u5316\u7dda\u6027\u56de\u6b78\u6a21\u578b\nlr = LinearRegression(featuresCol='features', labelCol='median_house_value')\n\n# \u8a13\u7df4\u6a21\u578b\nlr_model = lr.fit(train_data)\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-6\u8a55\u4f30\u6a21\u578b"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 6\uff1a\u8a55\u4f30\u6a21\u578b")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# \u5728\u6e2c\u8a66\u96c6\u4e0a\u9032\u884c\u9810\u6e2c\ntest_results = lr_model.evaluate(test_data)\n\n# \u8f38\u51fa\u8a55\u4f30\u6307\u6a19\nprint(f"RMSE\uff08\u5747\u65b9\u6839\u8aa4\u5dee\uff09\uff1a{test_results.rootMeanSquaredError}")\nprint(f"R2\uff08\u6c7a\u5b9a\u4fc2\u6578\uff09\uff1a{test_results.r2}")\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u67e5\u770b\u6a21\u578b\u7684\u4fc2\u6578\u548c\u622a\u8ddd")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'print(f"\u8ff4\u6b78\u4fc2\u6578\uff1a{lr_model.coefficients}")\nprint(f"\u622a\u8ddd\uff1a{lr_model.intercept}")\n')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f-7\u9032\u884c\u9810\u6e2c\u53ef\u9078"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f 7\uff1a\u9032\u884c\u9810\u6e2c\uff08\u53ef\u9078\uff09")),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u6709\u65b0\u7684\u6578\u64da\uff0c\u53ef\u4ee5\u4f7f\u7528\u5df2\u8a13\u7df4\u7684\u6a21\u578b\u9032\u884c\u9810\u6e2c\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# \u69cb\u5efa\u65b0\u6578\u64da\uff08\u7bc4\u4f8b\uff09\nnew_data = spark.createDataFrame([\n    (-122.23, 37.88, 41.0, 880.0, 129.0, 322.0, 126.0, 8.3252)\n], ['longitude', 'latitude', 'housing_median_age', 'total_rooms',\n    'total_bedrooms', 'population', 'households', 'median_income'])\n\n# \u7279\u5fb5\u7d44\u5408\nnew_data = assembler.transform(new_data)\n\n# \u9032\u884c\u9810\u6e2c\npredictions = lr_model.transform(new_data)\npredictions.select('prediction').show()\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u5b8c\u6574\u4ee3\u78bc\u7bc4\u4f8b"},(0,n.kt)("strong",{parentName:"h3"},"\u5b8c\u6574\u4ee3\u78bc\u7bc4\u4f8b")),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e0a\u8ff0\u6240\u6709\u6b65\u9a5f\u7684\u5b8c\u6574\u4ee3\u78bc\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.sql import SparkSession\nfrom pyspark.sql.functions import col, sum, mean\nfrom pyspark.ml.feature import VectorAssembler\nfrom pyspark.ml.regression import LinearRegression\n\n# \u5275\u5efa SparkSession\nspark = SparkSession.builder \\\n    .appName(\"HousePricePrediction\") \\\n    .getOrCreate()\n\n# \u8f09\u5165\u6578\u64da\u96c6\ndata = spark.read.csv(\"path/to/california_housing.csv\", header=True, inferSchema=True)\n\n# \u6aa2\u67e5\u7f3a\u5931\u503c\ndata.select([sum(col(c).isNull().cast(\"int\")).alias(c) for c in data.columns]).show()\n\n# \u586b\u5145\u7f3a\u5931\u503c\nmean_total_bedrooms = data.select(mean(data['total_bedrooms'])).collect()[0][0]\ndata = data.na.fill({'total_bedrooms': mean_total_bedrooms})\n\n# \u7279\u5fb5\u7d44\u5408\nfeature_columns = ['longitude', 'latitude', 'housing_median_age', 'total_rooms',\n                   'total_bedrooms', 'population', 'households', 'median_income']\nassembler = VectorAssembler(inputCols=feature_columns, outputCol='features')\ndata = assembler.transform(data)\n\n# \u6e96\u5099\u6700\u7d42\u6578\u64da\u96c6\nfinal_data = data.select('features', 'median_house_value')\n\n# \u5283\u5206\u6578\u64da\u96c6\ntrain_data, test_data = final_data.randomSplit([0.8, 0.2], seed=42)\n\n# \u521d\u59cb\u5316\u4e26\u8a13\u7df4\u6a21\u578b\nlr = LinearRegression(featuresCol='features', labelCol='median_house_value')\nlr_model = lr.fit(train_data)\n\n# \u8a55\u4f30\u6a21\u578b\ntest_results = lr_model.evaluate(test_data)\nprint(f\"RMSE\uff08\u5747\u65b9\u6839\u8aa4\u5dee\uff09\uff1a{test_results.rootMeanSquaredError}\")\nprint(f\"R2\uff08\u6c7a\u5b9a\u4fc2\u6578\uff09\uff1a{test_results.r2}\")\n\n# \u986f\u793a\u6a21\u578b\u4fc2\u6578\u548c\u622a\u8ddd\nprint(f\"\u8ff4\u6b78\u4fc2\u6578\uff1a{lr_model.coefficients}\")\nprint(f\"\u622a\u8ddd\uff1a{lr_model.intercept}\")\n\n# \u5728\u6e2c\u8a66\u96c6\u4e0a\u9032\u884c\u9810\u6e2c\npredictions = lr_model.transform(test_data)\npredictions.select('median_house_value', 'prediction').show(5)\n\n# \u505c\u6b62 SparkSession\nspark.stop()\n")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6b65\u9a5f\u89e3\u91cb"},(0,n.kt)("strong",{parentName:"h3"},"\u6b65\u9a5f\u89e3\u91cb")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6578\u64da\u8f09\u5165"),"\uff1a\u4f7f\u7528 PySpark \u7684 DataFrame \u4f86\u9ad8\u6548\u5730\u8655\u7406\u5927\u578b\u6578\u64da\u96c6\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6578\u64da\u6e05\u6d17"),"\uff1a\u6aa2\u67e5\u4e26\u8655\u7406\u7f3a\u5931\u503c\uff0c\u78ba\u4fdd\u6578\u64da\u8cea\u91cf\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7279\u5fb5\u5de5\u7a0b"),"\uff1a\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"VectorAssembler")," \u5c07\u591a\u500b\u7279\u5fb5\u5217\u7d44\u5408\u6210\u4e00\u500b\u5411\u91cf\uff0c\u4f9b\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u4f7f\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6578\u64da\u5283\u5206"),"\uff1a\u5c07\u6578\u64da\u96c6\u5283\u5206\u70ba\u8a13\u7df4\u96c6\u548c\u6e2c\u8a66\u96c6\uff0c\u4ee5\u8a55\u4f30\u6a21\u578b\u5728\u672a\u898b\u904e\u7684\u6578\u64da\u4e0a\u7684\u8868\u73fe\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6a21\u578b\u8a13\u7df4"),"\uff1a\u4f7f\u7528\u7dda\u6027\u56de\u6b78\u6a21\u578b\u9032\u884c\u8a13\u7df4\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6a21\u578b\u8a55\u4f30"),"\uff1a\u4f7f\u7528\u8a55\u4f30\u6307\u6a19\uff08\u5982 RMSE \u548c R\xb2\uff09\u4f86\u8861\u91cf\u6a21\u578b\u7684\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u9810\u6e2c"),"\uff1a\u4f7f\u7528\u8a13\u7df4\u597d\u7684\u6a21\u578b\u5c0d\u65b0\u6578\u64da\u9032\u884c\u9810\u6e2c\u3002")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9805"},(0,n.kt)("strong",{parentName:"h3"},"\u6ce8\u610f\u4e8b\u9805")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u7279\u5fb5\u7e2e\u653e"),"\uff1a\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u5c0d\u7279\u5fb5\u9032\u884c\u6a19\u6e96\u5316\u6216\u6b63\u898f\u5316\u53ef\u4ee5\u63d0\u9ad8\u6a21\u578b\u6027\u80fd\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"StandardScaler")," \u9032\u884c\u7279\u5fb5\u7e2e\u653e\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.feature import StandardScaler\n\nscaler = StandardScaler(inputCol="features", outputCol="scaledFeatures")\nscaler_model = scaler.fit(final_data)\nfinal_data = scaler_model.transform(final_data)\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6a21\u578b\u8abf\u512a"),"\uff1a\u53ef\u4ee5\u4f7f\u7528\u4ea4\u53c9\u9a57\u8b49\u548c\u53c3\u6578\u8abf\u6574\u4f86\u512a\u5316\u6a21\u578b\u6027\u80fd\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.tuning import CrossValidator, ParamGridBuilder\nfrom pyspark.ml.evaluation import RegressionEvaluator\n\n# \u5275\u5efa\u53c3\u6578\u7db2\u683c\nparamGrid = ParamGridBuilder() \\\n    .addGrid(lr.regParam, [0.01, 0.1, 0.5]) \\\n    .addGrid(lr.elasticNetParam, [0.0, 0.5, 1.0]) \\\n    .build()\n\n# \u5275\u5efa\u8a55\u4f30\u5668\nevaluator = RegressionEvaluator(labelCol="median_house_value", metricName="rmse")\n\n# \u5275\u5efa\u4ea4\u53c9\u9a57\u8b49\u5668\ncv = CrossValidator(estimator=lr, estimatorParamMaps=paramGrid, evaluator=evaluator, numFolds=5)\n\n# \u57f7\u884c\u4ea4\u53c9\u9a57\u8b49\ncv_model = cv.fit(train_data)\n\n# \u8a55\u4f30\u6700\u4f73\u6a21\u578b\nbest_model = cv_model.bestModel\ntest_results = best_model.evaluate(test_data)\nprint(f"\u7d93\u904e\u8abf\u512a\u5f8c\u7684 RMSE\uff1a{test_results.rootMeanSquaredError}")\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u66f4\u8907\u96dc\u7684\u6a21\u578b"),"\uff1a\u53ef\u4ee5\u5617\u8a66\u4f7f\u7528\u6c7a\u7b56\u6a39\u56de\u6b78\u3001\u96a8\u6a5f\u68ee\u6797\u56de\u6b78\u6216\u68af\u5ea6\u63d0\u5347\u6a39\u7b49\u6a21\u578b\uff0c\u53ef\u80fd\u6703\u7372\u5f97\u66f4\u597d\u7684\u7d50\u679c\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml.regression import RandomForestRegressor\n\nrf = RandomForestRegressor(featuresCol=\'features\', labelCol=\'median_house_value\')\nrf_model = rf.fit(train_data)\npredictions = rf_model.transform(test_data)\nevaluator = RegressionEvaluator(labelCol="median_house_value", predictionCol="prediction", metricName="rmse")\nrmse = evaluator.evaluate(predictions)\nprint(f"\u96a8\u6a5f\u68ee\u6797\u6a21\u578b\u7684 RMSE\uff1a{rmse}")\n')))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u7e3d\u7d50"},(0,n.kt)("strong",{parentName:"h3"},"\u7e3d\u7d50")),(0,n.kt)("p",null,"\u901a\u904e\u9019\u500b\u7bc4\u4f8b\uff0c\u6211\u5011\u5b78\u7fd2\u4e86\u5982\u4f55\u4f7f\u7528 PySpark \u9032\u884c\u623f\u50f9\u9810\u6e2c\uff0c\u5305\u62ec\u6578\u64da\u7684\u8f09\u5165\u3001\u9810\u8655\u7406\u3001\u6a21\u578b\u7684\u5efa\u7acb\u548c\u8a55\u4f30\u3002PySpark \u5f37\u5927\u7684\u5206\u6563\u5f0f\u8a08\u7b97\u80fd\u529b\u4f7f\u5176\u80fd\u5920\u8655\u7406\u5927\u578b\u6578\u64da\u96c6\uff0c\u9069\u5408\u5728\u751f\u7522\u74b0\u5883\u4e2d\u90e8\u7f72\u6a5f\u5668\u5b78\u7fd2\u6a21\u578b\u3002"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u64da\u9700\u8981\uff0c\u9032\u4e00\u6b65\u512a\u5316\u6a21\u578b\uff0c\u5617\u8a66\u4e0d\u540c\u7684\u7279\u5fb5\u5de5\u7a0b\u65b9\u6cd5\u548c\u6a21\u578b\u7b97\u6cd5\uff0c\u4ee5\u63d0\u9ad8\u9810\u6e2c\u6027\u80fd\u3002"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53c3\u8003\u8cc7\u6e90\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/api/python/index.html"},"PySpark \u5b98\u65b9\u6587\u6a94")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/ml-pipeline.html"},"\u6a5f\u5668\u5b78\u7fd2\u7ba1\u9053\uff08PySpark MLlib\uff09")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.kaggle.com/datasets/camnugent/california-housing-prices"},"\u52a0\u5dde\u623f\u50f9\u6578\u64da\u96c6\uff08Kaggle\uff09"))))}u.isMDXComponent=!0}}]);