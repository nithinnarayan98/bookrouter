var express=require('express')
const router=express.Router();
var book_arr=[{btitle:"war and piece",
genre:"historical fiction",
bauthor:"lev nicolayevich",
image:"https://prodimage.images-bn.com/pimages/2940016615394_p0_v1_s550x406.jpg"
},

{btitle:"les miserables",
genre:"thriller",
bauthor:"lev nicolayevich",
image:"https://prodimage.images-bn.com/pimages/2940016615394_p0_v1_s550x406.jpg"
},
{btitle:"les hhd",
genre:"horror",
bauthor:"len",
image:"https://prodimage.images-bn.com/pimages/2940016615394_p0_v1_s550x406.jpg"
},
{btitle:"les miserables",
genre:"historical fiction",
bauthor:"leo",
image:"https://prodimage.images-bn.com/pimages/2940016615394_p0_v1_s550x406.jpg"
}
];
router. get('/',function(req,res){
    res.render("books",{pageTitle:"Library",
    nav:[{link:"/books",Title:"book"},{link:"/author",Title:"Authors"}],
    Barray:book_arr});
})

router. get('/:id',function(req,res){
    var id=req.params.id
    console.log(id);
    console.log(book_arr[id].name);
    res.render("singlebook",{pageTitle:"Library",
    nav:[{link:"/books",Title:"book"},{link:"/author",Title:"Authors"}],
    Barray:book_arr[id]});
})



module.exports=router;