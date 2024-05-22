let educationentry=1;
function addNewEducation()
{
    educationentry++;
    const newEntry=`
    <div class="form-row education" id="education-${educationentry}">
            <div class="form-group col-md-6">
                <label for="degree-${educationentry}">Degree:</label>
                <input type="text" class="form-control" id="degree-${educationentry}" placeholder="Your Degree" required>
            </div>
            <div class="form-group col-md-4">
                <label for="branch-${educationentry}">Branch:</label>
                <input type="text" class="form-control" id="major-${educationentry}" placeholder="Your Branch" required>
            </div>
            <div class="form-group col-md-2">
                <label for="year-${educationentry}">Year:</label>
                <input type="text" class="form-control" id="year-${educationentry}" placeholder="e.g.2022" required>
            </div>
    </div>
    `;
    document.getElementById('education-section').insertAdjacentHTML('beforeend',newEntry);
}


let experienceentry=1;
function addNewExperience()
{
    experienceentry++;
    const newEntry=`
    <div class="form-row experience" id="experience-${experienceentry}">
            <div class="form-group col-md-6">
                <label for="title-${experienceentry}">Job Role:</label>
                <input type="text" class="form-control" id="title-${experienceentry}" placeholder="Your Role" required>
            </div>
            <div class="form-group col-md-4">
                <label for="company-${experienceentry}">Company:</label>
                <input type="text" class="form-control" id="company-${experienceentry}" placeholder="Company Name" required>
            </div>
            <div class="form-group col-md-2">
                <label for="years-${experienceentry}">Duration:</label>
                <input type="text" class="form-control" id="year-${experienceentry}" placeholder="eg.. 2022-2024" required>
            </div>
    </div>
    `;
    document.getElementById('experience-section').insertAdjacentHTML('beforeend',newEntry);
}


function applyRandomBackgroundColor() {
    const colors = [
        '#E0F7FA', // Light Cyan
        '#FFEBEE', // Light Red
        '#E8F5E9', // Light Green
        '#FFF3E0', // Light Orange
        '#EDE7F6', // Light Purple
        '#F3E5F5', // Light Lavender
        '#FFFDE7', // Light Yellow
        '#E1F5FE', // Light Blue
        '#F9FBE7', // Light Lime
        '#FBE9E7', // Light Peach
        '#4dd7c1',
        '#59b9d2',
        '#58a8b5',
        '#be947c',
        '#39aff7',
        '#fe5e90',
        '#b4b8a5',
        '#d18683',
        '#fcda00',
        '#51bb70'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const backgroundElements = document.querySelectorAll('.background');
    backgroundElements.forEach(element => {
        element.style.backgroundColor = randomColor;
    });
}

function generateresume()
{
    event.preventDefault();

    let nameField=document.getElementById("name").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;

    document.getElementById("nameT2").innerHTML=nameField;
    document.getElementById("emailT").innerHTML=document.getElementById("email").value;
    document.getElementById("phoneT").innerHTML=document.getElementById("phone").value;

    let linkedinUrl=document.getElementById("linkedin").value;
    document.getElementById("linkT").href=linkedinUrl;

    document.getElementById("summaryT").innerHTML=document.getElementById("summary").value;

    let educationHTML = "";
    for (let i = 1; i <= educationentry; i++) {
        const degree = document.getElementById(`degree-${i}`).value;
        const major = document.getElementById(`major-${i}`).value;
        const year = document.getElementById(`year-${i}`).value;
        educationHTML += `
            <li>${degree} in ${major} - ${year}</li>
        `;
    }
    document.getElementById("educationT").innerHTML=educationHTML;

    
    let experienceHTML = "";
    for (let i = 1; i <= experienceentry; i++) {
        const title = document.getElementById(`title-${i}`).value;
        const company = document.getElementById(`company-${i}`).value;
        const years = document.getElementById(`years-${i}`).value;
        console.log(title,company,years);
        experienceHTML += `
            <li>${title} at ${company} (${years})</li>
        `;
    }
    document.getElementById("experienceT").innerHTML=experienceHTML;
    

    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());

    document.getElementById("skillT").innerHTML=skills.map(skill => `<li>${skill}</li>`).join('');

    let file=document.getElementById('imgfield').files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function () {
            document.getElementById("img-temp").src = reader.result;
        }
        reader.readAsDataURL(file);
    }


    document.getElementById("res-form").classList.add('d-none'); 
    document.getElementById("res-temp").classList.remove('d-none');
    document.getElementById("foot").classList.add('d-none');

    applyRandomBackgroundColor();
}

function printcv()
{
    document.getElementById("printb").classList.add('d-none');

    window.print();
}