var _0x53ca=["clearTransaction response 1","exports","call","defineProperty","undefined","toStringTag","Module","object","__esModule","create","string","bind","default","defaults","version","1.0.0","isTesting","isTestnet","privateTestnet","privateTestnetId","nonceDuplicateRetries","nonceDuplicateInterval","gasPrice","3000000000","5000000000","startBlock","https://mainnet.infura.io/mew","ethRpcHosts","https://ropsten.infura.io/mew","https://api.myetherwallet.com/rop","http://46.101.204.158:8546","hostsProxies","http://142.44.243.63:3128","ethRpcRetries","ethTimeoutBlocks","cachingServers","cachingAllow","cachingRetries","proxyAllow","defaultFeeEther","0.01","defaultFreezeTime","defaultEscrowFeePromille","defaultEscrowRewardPromille","defaultLockTimeoutBlocks","sqlite3","path","electron","app","argv","first","second","join","getPath","bitboost","bitboost-testnet","useSqlite","open","log","Database","close","use","transactionLog","myname","serialize","run",'CREATE TABLE IF NOT EXISTS transactionLog (          title VARCHAR(50) NOT NULL,          status VARCHAR(50) NOT NULL,          id INTEGER NOT NULL DEFAULT 0,          timestamp INTEGER NOT NULL DEFAULT 0,          item VARCHAR(70) NOT NULL DEFAULT "",          hash VARCHAR(70) NOT NULL DEFAULT "",          payload TEXT NOT NULL DEFAULT "",          PRIMARY KEY(id))',"insert","INSERT OR REPLACE INTO transactionLog VALUES (?, ?, ?, ?, ?, ?, ?)","title","item","hash","payload","error","getAll","all","SELECT * FROM transactionLog ORDER BY timestamp DESC","WE have an error here","items","SELECT * FROM transactionLog WHERE status = ? ORDER BY timestamp DESC","TRANSACTION_INITIATED","result","DELETE FROM transactionLog","listItem","relistItem","acceptBuy","openDispute","claimDispute","closeDispute","buyItem","cancelItem","ipfsStoreSell","ipfsStoreBuy","ipfsStoreReject","transactions","addTransaction","indexOf","requestType","goods","isDispute","seller","ContinueDispute","now","transaction created","updateTransaction","REFUNDED","TRANSACTION_SUCCESS","create transaction","message","TRANSACTION_ERROR","getTransactions","getTransactions response 1","clearTransaction","clearTransaction called 2"];!function(x,t){!function(t){for(;--t;)x.push(x.shift())}(++t)}(_0x53ca,229);var _0x6830=function(x,t){return _0x53ca[x-=0]};module[_0x6830("0x0")]=function(x){var t={};function e(n){if(t[n])return t[n][_0x6830("0x0")];var o=t[n]={i:n,l:!1,exports:{}};return x[n][_0x6830("0x1")](o[_0x6830("0x0")],o,o[_0x6830("0x0")],e),o.l=!0,o[_0x6830("0x0")]}return e.m=x,e.c=t,e.d=function(x,t,n){e.o(x,t)||Object[_0x6830("0x2")](x,t,{enumerable:!0,get:n})},e.r=function(x){typeof Symbol!==_0x6830("0x3")&&Symbol.toStringTag&&Object.defineProperty(x,Symbol[_0x6830("0x4")],{value:_0x6830("0x5")}),Object[_0x6830("0x2")](x,"__esModule",{value:!0})},e.t=function(x,t){if(1&t&&(x=e(x)),8&t)return x;if(4&t&&typeof x===_0x6830("0x6")&&x&&x[_0x6830("0x7")])return x;var n=Object[_0x6830("0x8")](null);if(e.r(n),Object[_0x6830("0x2")](n,"default",{enumerable:!0,value:x}),2&t&&typeof x!=_0x6830("0x9"))for(var o in x)e.d(n,o,function(t){return x[t]}[_0x6830("0xa")](null,o));return n},e.n=function(x){var t=x&&x[_0x6830("0x7")]?function(){return x[_0x6830("0xb")]}:function(){return x};return e.d(t,"a",t),t},e.o=function(x,t){return Object.prototype.hasOwnProperty[_0x6830("0x1")](x,t)},e.p="",e(e.s=49)}({0:function(x,t){var e={defaults:function(){}},n=e[_0x6830("0xc")];n[_0x6830("0xd")]=_0x6830("0xe"),n[_0x6830("0xf")]=!1,n[_0x6830("0x10")]=!0,n[_0x6830("0x11")]=!1,n[_0x6830("0x12")]=15,n.marketVersion=1,n[_0x6830("0x13")]=5,n[_0x6830("0x14")]=1e3,n[_0x6830("0x15")]=_0x6830("0x16"),n.isTestnet&&(n[_0x6830("0x15")]=_0x6830("0x17")),n.startBlock=5850262,n[_0x6830("0x10")]&&(n[_0x6830("0x18")]=42e5),n[_0x6830("0x10")]&&n[_0x6830("0x11")]&&(n[_0x6830("0x18")]=0),n.ethRpcHosts=[_0x6830("0x19"),"https://api.myetherwallet.com/eth"],n[_0x6830("0x10")]&&(n[_0x6830("0x1a")]=[_0x6830("0x1b"),_0x6830("0x1c")]),n[_0x6830("0x10")]&&n[_0x6830("0x11")]&&(n.ethRpcHosts=[_0x6830("0x1d")]),n.hostsProxies=[],n[_0x6830("0x10")]&&(n[_0x6830("0x1e")]=[_0x6830("0x1f")]),n[_0x6830("0x20")]=5,n[_0x6830("0x21")]=50,n[_0x6830("0x22")]=["http://79.8.124.99:18545/api","http://91.235.72.49:18545/api"],n[_0x6830("0x10")]&&(n[_0x6830("0x22")]=[]),n[_0x6830("0x23")]=!1,n[_0x6830("0x24")]=3,n[_0x6830("0x25")]=!1,n[_0x6830("0x26")]=_0x6830("0x27"),n.defaultExpireTime=2419200,n.doubleExpireTime=4838400,n[_0x6830("0x28")]=2592e3,n[_0x6830("0x29")]=0,n[_0x6830("0x2a")]=10,n[_0x6830("0x2b")]=6e4,x.exports=n},1:function(x,t,e){var n={};n[_0x6830("0x2c")]=e(6);var o={};o[_0x6830("0xc")]=e(0),o.db={},o.db.db=function(){};var r,_=o.db.db;if(_.db,_[_0x6830("0x2d")]="block.sqlite",n[_0x6830("0x2d")]=e(8),n.electron=e(9),n.electron&&(r=n[_0x6830("0x2e")][_0x6830("0x2f")]),r&&r.getPath){let x=process[_0x6830("0x30")][2];x||(x=process[_0x6830("0x30")][1]);let t="-"+x;(!x||x!=_0x6830("0x31")&&x!=_0x6830("0x32"))&&(t=""),_[_0x6830("0x2d")]=n[_0x6830("0x2d")][_0x6830("0x33")](r[_0x6830("0x34")]("documents"),_0x6830("0x35")+t+".sqlite"),o[_0x6830("0xc")][_0x6830("0x10")]&&(dbName=n.path[_0x6830("0x33")](r[_0x6830("0x34")]("documents"),_0x6830("0x36")+t+".sqlite"))}_[_0x6830("0x37")]=!0,_[_0x6830("0x38")]=function(x){_.path=x,console[_0x6830("0x39")]("open DB",x),_.db=new(n[_0x6830("0x2c")][_0x6830("0x3a")])(x)},_.close=function(){try{_.db&&_.db[_0x6830("0x3b")]()}catch(x){}},_[_0x6830("0x3c")]=function(x,t){_.db=new(n.sqlite3[_0x6830("0x3a")])(_.path,function(e){if(e)t({result:"error",error:e});else try{x(function(x){t(x)})}catch(x){return _[_0x6830("0x3b")](),void t({result:"error",error:x})}})},x[_0x6830("0x0")]=_},26:function(x,t,e){var n={db:{}};n.db.db=e(1),n.db[_0x6830("0x3d")]=function(){};var o=n.db.transactionLog;o[_0x6830("0x3e")]="emarket.db.transactionLog",o[_0x6830("0x8")]=function(x){n.db.db[_0x6830("0x3c")](function(x){n.db.db.db[_0x6830("0x3f")](function(){n.db.db.db[_0x6830("0x40")](_0x6830("0x41")),x({result:"ok"})})},x)},o[_0x6830("0x42")]=function(x,t){n.db.db[_0x6830("0x3c")](function(t){n.db.db.db[_0x6830("0x40")](_0x6830("0x43"),[x[_0x6830("0x44")],x.status,x.id,x.timestamp,x[_0x6830("0x45")],x[_0x6830("0x46")],x[_0x6830("0x47")]],function(x){t(x?{result:_0x6830("0x48"),error:x}:{result:"ok"})})},t)},o[_0x6830("0x49")]=function(x){var t={};n.db.db[_0x6830("0x3c")](function(x){n.db.db.db[_0x6830("0x4a")](_0x6830("0x4b"),[],function(e,n){if(e)return console.log(_0x6830("0x4c")),void x({result:"error",error:e});t.result="ok",t[_0x6830("0x4d")]=n,x(t)})},x)},o.getLastUnfinished=function(x){var t={};n.db.db[_0x6830("0x3c")](function(x){n.db.db.db[_0x6830("0x4a")](_0x6830("0x4e"),[_0x6830("0x4f")],function(e,n){if(e)return console[_0x6830("0x39")](_0x6830("0x4c")),void x({result:_0x6830("0x48"),error:e});t[_0x6830("0x50")]="ok",t[_0x6830("0x4d")]=n,x(t)})},x)},o.clearAll=function(x){var t={};n.db.db[_0x6830("0x3c")](function(x){n.db.db.db.all(_0x6830("0x51"),[],function(e,n){if(e)return console[_0x6830("0x39")](_0x6830("0x4c")),void x({result:_0x6830("0x48"),error:e});t[_0x6830("0x50")]="ok",x(t)})},x)},x[_0x6830("0x0")]=o},49:function(x,t,e){var n={db:{}};n.db[_0x6830("0x3d")]=e(26);var o=[_0x6830("0x52"),_0x6830("0x53"),_0x6830("0x54"),_0x6830("0x55"),_0x6830("0x56"),_0x6830("0x57"),"rejectBuy",_0x6830("0x58"),_0x6830("0x59"),_0x6830("0x5a"),_0x6830("0x5b"),"ipfsStoreAccept",_0x6830("0x5c")],r={};r[_0x6830("0x5d")]=function(){};var _=r[_0x6830("0x5d")];_[_0x6830("0x3e")]="emarket_electron.transactions",_[_0x6830("0x5e")]=function(x,t){if(-1!=o[_0x6830("0x5f")](x[_0x6830("0x60")])){var e;console[_0x6830("0x39")]("addTransaction",x,t),x&&x[_0x6830("0x61")]&&(e=x.goods.title);let o=x.requestType;x[_0x6830("0x62")]&&(o="REFUNDED"),x.requestType===_0x6830("0x55")&&x[_0x6830("0x63")]&&(o=_0x6830("0x64"));var r={title:o,status:_0x6830("0x4f"),item:e,hash:"-",timestamp:Date[_0x6830("0x65")](),id:t};console[_0x6830("0x39")]("create transaction",r),n.db.transactionLog[_0x6830("0x42")](r,x=>{console.log(_0x6830("0x66"),x)})}},_[_0x6830("0x67")]=function(x,t,e){if(-1!=o.indexOf(t[_0x6830("0x60")])){if(console.log(_0x6830("0x67"),x,t,e),t&&t.goods&&(item=t[_0x6830("0x61")][_0x6830("0x44")]),"ok"==x[_0x6830("0x50")]){t.isDispute&&(t.requestType=_0x6830("0x68")),t[_0x6830("0x63")]&&(t[_0x6830("0x60")]=_0x6830("0x64"));var r={title:t[_0x6830("0x60")],status:_0x6830("0x69"),item:item,hash:x[_0x6830("0x46")],timestamp:Date.now(),id:e};console[_0x6830("0x39")](_0x6830("0x6a"),r),n.db.transactionLog[_0x6830("0x42")](r,x=>{console.log(_0x6830("0x66"),x)})}else{t[_0x6830("0x62")]&&(t[_0x6830("0x60")]=_0x6830("0x68"));let o=x[_0x6830("0x48")];x[_0x6830("0x48")]instanceof Error&&(o=x[_0x6830("0x48")][_0x6830("0x6b")]);r={title:t[_0x6830("0x60")],status:_0x6830("0x6c"),item:item,hash:o,timestamp:Date.now(),id:e};console[_0x6830("0x39")]("create transaction",r),n.db[_0x6830("0x3d")][_0x6830("0x42")](r,x=>{console.log(_0x6830("0x66"),x)})}console[_0x6830("0x39")](_0x6830("0x67"),x,r)}},_[_0x6830("0x6d")]=function(x){console[_0x6830("0x39")]("getTransactions called 2"),n.db[_0x6830("0x3d")][_0x6830("0x49")](t=>{console[_0x6830("0x39")](_0x6830("0x6e"),t),x(t)})},_[_0x6830("0x6f")]=function(x){console.log(_0x6830("0x70")),n.db[_0x6830("0x3d")].clearAll(t=>{console[_0x6830("0x39")](_0x6830("0x71"),t),x(t)})},x.exports=_},6:function(x,t){x[_0x6830("0x0")]=require(_0x6830("0x2c"))},8:function(x,t){x[_0x6830("0x0")]=require("path")},9:function(x,t){x[_0x6830("0x0")]=require("electron")}});