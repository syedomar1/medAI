function SignUp (){
 
    return (<div>
         <h1>SignUp on MedAI</h1>
           <br></br>
           <form action="/signup" method="POST" class="needs-validation" novalidate>
               <div class="mb-3">
                   <label for="username" class="form-label">Username</label>
                   <input name="username" class="form-control" required></input>
                   <div class="valid-feedback">Looks good!</div>
               </div>
               <div class="mb-3">
                   <label for="email" class="form-label">Email</label>
                   <input name="email" class="form-control" required></input>
               </div>
               <div class="mb-3">
                   <label for="password" class="form-label">Password</label>
                   <input name="password" class="form-control" required></input>
               </div>
               <button class="btn btn-success">SignUp</button>
           </form>
       </div>
    );
   }
export default SignUp;
