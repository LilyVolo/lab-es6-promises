// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

  



// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += `<li>'Mashed potatoes are ready!'</li>`
          getInstruction("mashedPotatoes", 5, () => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>'Mashed potatoes are ready!'</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));

}, (error) => console.log(error));

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    console.log('check', 0)
    obtainInstruction('steak', 1).then( (step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
      console.log('check', 1)
      obtainInstruction('steak', 2) .then( (step2) => {
        document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
        console.log('check', 2)
        obtainInstruction('steak', 3)   .then( (step3) => {
          document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
          console.log('check', 3)
          obtainInstruction('steak', 4) .then( (step4) => {
            document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
            console.log('check', 4)
            obtainInstruction('steak', 5)  .then( (step5) => {
              document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
              console.log('check', 5)
              obtainInstruction('steak', 6)    .then( (step6) => {
                document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
                console.log('check 6')
                obtainInstruction('steak', 7)    .then( (step7) => {
                  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
                  console.log('check 7')
                  document.querySelector("#steakImg").removeAttribute("hidden");
                   
                  document.querySelector("#steak").innerHTML += `<li>'Stake is ready!'</li>`
                })
              })
            })
          })
        })
     })
   })
 })
   
 
   
  



// Iteration 3 using async/await
// ...
async function makeBroccoli() {
  try {
   const step0 = await obtainInstruction('broccoli', 0,)
   {
     document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    }
    
    
   const step1 = await obtainInstruction('broccoli', 1,)
    {
       document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
     }
        
   const step2 = await obtainInstruction('broccoli', 2,)
   {
     document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    }
       
   const step3 = await obtainInstruction('broccoli', 3,)
{
      document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    }
      const step4 = await obtainInstruction('broccoli', 4,)
      {
            document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
          }
          const step5 = await obtainInstruction('broccoli', 5,)
          {
                document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
              }
              const step6 = await obtainInstruction('broccoli', 6)
              {
                    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
                    document.querySelector("#broccoli").innerHTML += `<li> 'Broccoli is ready!' </li>`

                    document.querySelector("#broccoliImg").removeAttribute("hidden");
                  }
                   
                } 
                
                catch (err) {
                  console.error('Произошла ошибка!', err);
                }
            
                  }
makeBroccoli()
// Bonus 2 - Promise all
// ...
//let a = [ obtainInstruction('brusselsSprouts', 0), obtainInstruction('brusselsSprouts', 1), obtainInstruction('brusselsSprouts', 2) ]
 let b = []
 for (let i = 1; i < 8; i++) {
b.push(obtainInstruction('brusselsSprouts', i))
}




Promise.all(b).then((data) => {
  console.log(data)
 data.forEach(element => {
  document.querySelector("#brusselsSprouts").innerHTML += `<li>${element}</li>`
 });

document.querySelector("#brusselsSprouts").innerHTML += `<li>'Brussels sprouts are ready!'</li>`
document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

}
)
