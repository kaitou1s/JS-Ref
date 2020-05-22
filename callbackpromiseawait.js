// // callback hell
// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [523, 883, 432, 974];
//         console.log(recipeID);

//         setTimeout(() => {
//             const recipe = { title: 'Fresh tomato pasta', publisher: 'Jonas' };
//             console.log(`${recipeID[2]}: ${recipe.title}`);

//             setTimeout(publisher => {
//                 const recipe2 = { title: 'Italian Pizza', publisher: 'Jonas' };
//                 console.log(recipe);
//             }, 1500, recipe.publisher);

//         }, 1500);

//     }, 1500);
// }
// getRecipe();
function testCallback() {
    setTimeout(() => {
        const arr = [1, 2, 3, 4];
        console.log(arr)
        setTimeout(() => {
            const obj = { name: 'Hoang', job: 'Student' };
            console.log(`${arr[2]}: ${obj.name}`);
            setTimeout(() => {
                const obj1 = { name: 'Hoang', job: 'Dev' };
                console.log(obj1)

            }, 1500)
        }, 1500)
    }, 1500)
}
testCallback();