
export default [
    {
         name:'Blog Title',
         desc:'An AI tool that generate blog title based on your blog content',
         category:"Blog",
         icon:'/title.png',
         aiPrompt:"Give me 5 blog topic ideas in bullet form only based on ",
         slug:'generate-blog-title',
         form:[
            {
                label:'Enter your blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline',
                field:'textarea',
                name:'outline'
            }
         ]
    },
    {
        name:'Blog Title',
        desc:'An AI tool that generate blog title based on your blog content',
        category:"Blog",
        icon:'/title.png',
        aiPrompt:"Give me 5 blog topic ideas in bullet form only based on ",
        slug:'generate-blog-title',
        form:[
           {
               label:'Enter your blog niche',
               field:'input',
               name:'niche',
               required:true
           },
           {
               label:'Enter blog outline',
               field:'textarea',
               name:'outline'
           }
        ]
   },
   {
    name:'Blog Title',
    desc:'An AI tool that generate blog title based on your blog content',
    category:"Blog",
    icon:'/title.png',
    aiPrompt:"Give me 5 blog topic ideas in bullet form only based on ",
    slug:'generate-blog-title',
    form:[
       {
           label:'Enter your blog niche',
           field:'input',
           name:'niche',
           required:true
       },
       {
           label:'Enter blog outline',
           field:'textarea',
           name:'outline'
       }
    ]
}
]