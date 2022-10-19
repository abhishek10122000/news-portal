const NewsCard=()=>{
    return(
        <>
            <div className=" border ml-12 flex mt-3 mx-3 rounded-xl">
                <div className="w-1/4 "><img className="rounded-l-xl h-full" src="https://th.bing.com/th/id/OIP.hV4xDOYuJ2HSZnqTuwjLzgHaE8?pid=ImgDet&rs=1"></img></div>
                <div className="w-3/4 flex flex-col p-5 gap-2 font-light">
                    <h1 className="text-2xl font-bold">Education-Related Job Titles and Required Skills</h1>
                    <h1>Related Job Titles</h1>
                    <p className="text-sm">
                    Being a teacher is just one of the many different types of jobs available within the education field. As well as teachers, schools require administrators, principals, crossing guards, and so many other roles, in order to run smoothly and serve students. And, of course, jobs in education extend beyond classrooms and school buildings. 
                    </p>
                    <div className="flex justify-end">
                        <a href="" className="p-2 px-5 bg-teal-600 rounded-lg ">Read more</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default NewsCard;