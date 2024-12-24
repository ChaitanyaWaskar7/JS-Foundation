// function userFetchdata()
// {
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             resolve({name:'hites',url:'chaicode.com'})
//         },3000)
//     })
// }

// async function getFetchdata()
// {
//     try {
//         console.log('Fetching user data ....')
//         const userData = await userFetchdata()
//         console.log("User data :", userData)
//     } catch (error) {
//         console.log("Error fetching data", error)
//     }
// }

// getFetchdata()


function fetchPostData()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Post data fetched ')
        }, 2000);
    })
}

function fetchCommentData()
{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Comment data fetched ')
        }, 3000);
    })
}

async function getAllData()
{
    try {

        console.log('fetching blog data ....')

        // const postdata = await fetchPostData()
        // console.log("postdata :", postdata)
        
        // const commentdata = await fetchCommentData()
        // console.log("commentdata :",commentdata)

        const [postdata, commentdata] = await Promise.all([fetchPostData(), fetchCommentData()])
        console.log(postdata)
        console.log(commentdata)
    } catch (error) {
        console.log('error fetching data', error)
    }
}

getAllData();