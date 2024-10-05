"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1758],{7438:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>h});var l=s(4848),t=s(8453);const i={id:"raw-string",sidebar_label:"Raw String",title:"Raw String"},r="Raw String Commands",a={id:"commands/raw-string",title:"Raw String",description:"APPEND",source:"@site/docs/commands/raw-string.md",sourceDirName:"commands",slug:"/commands/raw-string",permalink:"/garnet/docs/commands/raw-string",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/commands/raw-string.md",tags:[],version:"current",frontMatter:{id:"raw-string",sidebar_label:"Raw String",title:"Raw String"},sidebar:"garnetDocSidebar",previous:{title:"API Compatibility",permalink:"/garnet/docs/commands/api-compatibility"},next:{title:"Generic",permalink:"/garnet/docs/commands/generic"}},d={},h=[{value:"APPEND",id:"append",level:3},{value:"Syntax",id:"syntax",level:4},{value:"RESP Reply",id:"resp-reply",level:4},{value:"DECR",id:"decr",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"RESP Reply",id:"resp-reply-1",level:4},{value:"DECRBY",id:"decrby",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Resp Reply",id:"resp-reply-2",level:4},{value:"GET",id:"get",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Resp Reply",id:"resp-reply-3",level:4},{value:"GETDEL",id:"getdel",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"Resp Reply",id:"resp-reply-4",level:4},{value:"GETRANGE",id:"getrange",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"Resp Reply",id:"resp-reply-5",level:4},{value:"INCR",id:"incr",level:3},{value:"Syntax",id:"syntax-6",level:4},{value:"Resp Reply",id:"resp-reply-6",level:4},{value:"INCRBY",id:"incrby",level:3},{value:"Syntax",id:"syntax-7",level:4},{value:"Resp Reply",id:"resp-reply-7",level:4},{value:"MGET",id:"mget",level:3},{value:"Syntax",id:"syntax-8",level:4},{value:"MSET",id:"mset",level:3},{value:"Syntax",id:"syntax-9",level:4},{value:"Resp Reply",id:"resp-reply-8",level:4},{value:"MSETNX",id:"msetnx",level:3},{value:"Syntax",id:"syntax-10",level:4},{value:"Resp Reply",id:"resp-reply-9",level:4},{value:"PSETEX",id:"psetex",level:3},{value:"Syntax",id:"syntax-11",level:4},{value:"Resp Reply",id:"resp-reply-10",level:4},{value:"SET",id:"set",level:3},{value:"Syntax",id:"syntax-12",level:4},{value:"Resp Reply",id:"resp-reply-11",level:4},{value:"SETEX",id:"setex",level:3},{value:"Syntax",id:"syntax-13",level:4},{value:"Resp Reply",id:"resp-reply-12",level:4},{value:"STRLEN",id:"strlen",level:3},{value:"Syntax",id:"syntax-14",level:4},{value:"Resp Reply",id:"resp-reply-13",level:4},{value:"SETRANGE",id:"setrange",level:3},{value:"Syntax",id:"syntax-15",level:4},{value:"Resp Reply",id:"resp-reply-14",level:4}];function c(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"raw-string-commands",children:"Raw String Commands"})}),"\n",(0,l.jsx)(n.h3,{id:"append",children:"APPEND"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    APPEND key value\n"})}),"\n",(0,l.jsx)(n.p,{children:"If key already exists and is a string, this command appends the value at the end of the string. If key does not exist it is created and set as an empty string."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply",children:"RESP Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the length of the string after the append operation."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"decr",children:"DECR"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    DECR key\n"})}),"\n",(0,l.jsx)(n.p,{children:"Decrements the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-1",children:"RESP Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the value of the key after decrementing it."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"decrby",children:"DECRBY"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    DECRBY key decrement\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Decrements the number stored at key by the value of parameter ",(0,l.jsx)(n.code,{children:"decrement"}),". If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-2",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the value of the key after decrementing it."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"get",children:"GET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    GET key\n"})}),"\n",(0,l.jsx)(n.p,{children:"Gets the value of key. If the key does not exist nil is returned."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-3",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"One of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bulk string reply: the value of the key."}),"\n",(0,l.jsx)(n.li,{children:"Nil reply: if the key does not exist."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"getdel",children:"GETDEL"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    GETDEL key\n"})}),"\n",(0,l.jsx)(n.p,{children:"Get the value of key and delete the key. This command is similar to GET, but that it also deletes the key on success (if and only if the key's value type is a string)."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-4",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"One of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Bulk string reply: the value of the key."}),"\n",(0,l.jsx)(n.li,{children:"Nil reply: if the key does not exist or if the key's value type is not a string."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"getrange",children:"GETRANGE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-5",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    GETRANGE key start end\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the substring of the string value stored at key, determined by the offsets start and end (both are inclusive)."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-5",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Bulk string reply: The substring of the string value stored at key, determined by the offsets start and end (both are inclusive)."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"incr",children:"INCR"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-6",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    INCR key\n"})}),"\n",(0,l.jsx)(n.p,{children:"Increments the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-6",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the value of the key after the increment."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"incrby",children:"INCRBY"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-7",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    INCRBY key increment\n"})}),"\n",(0,l.jsx)(n.p,{children:"Increments the number stored at key by the value of the parameter increment. If the key does not exist, it is set to 0 before performing the operation."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-7",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the value of the key after the increment."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"mget",children:"MGET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-8",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    MGET key [key ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the values of all specified keys. For every key that does not exist, the special value nil is returned."}),"\n",(0,l.jsx)(n.h3,{id:"mset",children:"MSET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-9",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    MSET key value [key value ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Sets the given keys to their respective values. MSET replaces existing values with new values, just as regular SET. See MSETNX if you don't want to overwrite existing values."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-8",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a list of values at the specified keys."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"msetnx",children:"MSETNX"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-10",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    MSETNX key value [key value ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Sets the given keys to their respective values. MSETNX will not perform any operation at all even if just a single key already exists."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-9",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"One of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Integer reply: 0 if no key was set (at least one key already existed)."}),"\n",(0,l.jsx)(n.li,{children:"Integer reply: 1 if all the keys were set."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"psetex",children:"PSETEX"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-11",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    PSETEX key milliseconds value\n"})}),"\n",(0,l.jsx)(n.p,{children:"PSETEX works exactly like SETEX with the sole difference that the expire time is specified in milliseconds instead of seconds."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-10",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"set",children:"SET"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-12",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    SET key value [NX | XX] [GET] [EX seconds | PX milliseconds |\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.strong,{children:"key"})," to hold the string value. If key already holds a value, it is overwritten, regardless of its type. Any previous time to live associated with the ",(0,l.jsx)(n.strong,{children:"key"})," is discarded on successful SET operation."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Options:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"EX seconds -- Set the specified expire time, in seconds (a positive integer)."}),"\n",(0,l.jsx)(n.li,{children:"PX milliseconds -- Set the specified expire time, in milliseconds (a positive integer)."}),"\n",(0,l.jsx)(n.li,{children:"NX -- Only set the key if it does not already exist."}),"\n",(0,l.jsx)(n.li,{children:"XX -- Only set the key if it already exists."}),"\n",(0,l.jsx)(n.li,{children:"KEEPTTL -- Retain the time to live associated with the key."}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-11",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Any of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Nil reply: GET not given: Operation was aborted (conflict with one of the XX/NX options)."}),"\n",(0,l.jsx)(n.li,{children:"Simple string reply: OK. GET not given: The key was set."}),"\n",(0,l.jsx)(n.li,{children:"Nil reply: GET given: The key didn't exist before the SET."}),"\n",(0,l.jsx)(n.li,{children:"Bulk string reply: GET given: The previous value of the key."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setex",children:"SETEX"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-13",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    SETEX key value\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.strong,{children:"key"})," to hold the string value and set ",(0,l.jsx)(n.strong,{children:"key"})," to timeout after a given number of seconds."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-12",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple string reply: OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"strlen",children:"STRLEN"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-14",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    STRLEN key\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Returns the length of the string value stored at ",(0,l.jsx)(n.strong,{children:"key"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-13",children:"Resp Reply"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Integer reply: the length of the string stored at key, or 0 when the key does not exist."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setrange",children:"SETRANGE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-15",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    SETRANGE key offset value\n"})}),"\n",(0,l.jsx)(n.p,{children:"Overwrites part of the string stored at key, starting at the specified offset, for the entire length of value."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-14",children:"Resp Reply"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Integer reply: the length of the string after it was modified by the command."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var l=s(6540);const t={},i=l.createContext(t);function r(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);