# cookies
A JavaScript Library to work with cookies

## ***First include cookie in your html document head section***
```
<script src="/cookies/cookie.js" charset="utf-8"></script>
```
## ***To store cookie***
```
<script>
  cookie.setItem(name, value, expire)
</script>
```
- **name** = name of the cookie
- **value** = value of cookie
- **expire** = time to expire it is optional default expire time is **1 year**

## ***To get cookie***
```
<script>
  let value = cookie.getItem(name)
  console.log(value)
</script>
```
This will return the value of the name cookie you have set before
<img src="https://camo.githubusercontent.com/8ac8115fc1d48176f64e8b1b8cbc113170726b2f/687474703a2f2f7777772e66696c6c6d75727261792e636f6d2f3130302f313030">
