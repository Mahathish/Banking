function Registration(){
    return(
    <div class="body-content">
      <div class="module">
        <h1>Create an account</h1>
        <form class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
          <div class="alert alert-error"></div>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="text" placeholder="Date of Birth" name="number" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Mobile Number" name="text" required />
          <input type="password" placeholder="Password" name="password" autocomplete="new-password" required />
          <input type="password" placeholder="Confirm Password" name="confirmpassword" autocomplete="new-password" required />
          <div class="avatar"><label>Select your avatar: </label><input type="file" name="avatar" accept="image/*"  /></div>
          <input type="submit" value="Register" name="register" class="btn btn-block btn-primary" />
        </form>
      </div>
    </div>
    )
    }
    export default Registration;