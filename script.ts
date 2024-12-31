//listing element 
document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    //type assertion
    const profilePictueInput =document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const educationElement = document.getElementById("education") as HTMLInputElement;
    const experienceElement = document.getElementById("experience") as HTMLInputElement;
    const skillElement = document.getElementById("skills") as HTMLInputElement;

    if (profilePictueInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillElement.value;
    
  //picture element
  const profilePictureFile = profilePictueInput.files?.[0]
  const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';



    //create resume output
    const resumeOutput = `
    <h2>Resume <h2>
    ${profilePictureURL? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`: ''}
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>

     <h3>Experience</h3>
    <p>${experience}</p> 
    
    <h3>Skills</h3>
    <p>${skills}</p>
    `; 

    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    } 
    else {
        console.error('the resume output element are missing')
    }
}
else {
    console.error('one or more output elements are missing')
}
})