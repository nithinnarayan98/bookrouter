var express=require('express');
const app=express();
var bookrouter=require('./routes/bookrouter')
const path=require('path')
app.set("view engine","ejs");
app.set("views" ,"./src/views")
app.use("/books",bookrouter)


app.get('/',function(req,res){
    res.render("index",{pageTitle:"Library",nav:[{link:"/books",Title:"book"},{link:"/author",Title:"Authors"}]});
});

app. get('/author',function(req,res){
    res.send("you are in author page");
})

app.use(express.static(path.join(__dirname,"/public")));




app.listen(3000,function(req,res){
    console.log('listening to port');
})