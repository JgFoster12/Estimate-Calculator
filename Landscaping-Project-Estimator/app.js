// Variables

let project_form = document.getElementById('landscaper-form');

project_form.addEventListener('submit', calculateResults);

function calculateResults(e){
    let customer_name = document.getElementById('customer-name').value;
    let customer_email = document.getElementById('customer-email').value;
    let customer_number = document.getElementById('customer-number').value;
    let project_size = getSizeValue();
    let project_package = getProjectValue();
    const townhouse = 450;
    const small = 650;
    const medium = 800;
    const large = 999;
    const bronze = .15;
    const silver = .30;
    const gold = .45;
    const platinum = .60;
    let result = 0;


    if(project_size.toLowerCase().includes('townhouse')){
        if(project_package.toLowerCase().includes('bronze')){
            result = townhouse + (townhouse * bronze);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('silver')){
            result = townhouse + (townhouse * silver);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('gold')){
            result = townhouse + (townhouse * gold);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('platinum')){
            result = townhouse + (townhouse * platinum);
            console.log(result);
        }
    }
    else if(project_size.toLowerCase().includes('small')){
        if(project_package.toLowerCase().includes('bronze')){
            result = small + (small * bronze);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('silver')){
            result = small + (small * silver);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('gold')){
            result = small + (small * gold);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('platinum')){
            result = small + (small * platinum);
            console.log(result);
        }
    }
    else if(project_size.toLowerCase().includes('medium')){
        if(project_package.toLowerCase().includes('bronze')){
            result = medium + (medium * bronze);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('silver')){
            result = medium + (medium * silver);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('gold')){
            result = medium + (medium * gold);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('platinum')){
            result = medium + (medium * platinum);
            console.log(result);
        }
    }
    else if(project_size.toLowerCase().includes('large')){
        if(project_package.toLowerCase().includes('bronze')){
            result = large + (large * bronze);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('silver')){
            result = large + (large * silver);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('gold')){
            result = large + (large * gold);
            console.log(result);
        }
        else if(project_package.toLowerCase().includes('platinum')){
            result = large + (large * platinum);
            console.log(result);
        }
    }

    
    document.getElementById('display_name').value = customer_name;
    document.getElementById('display_email').value = customer_email;
    document.getElementById('display_phone').value = customer_number;
    document.getElementById('total_estimate').value = result.toFixed(2);
    

    console.log(project_size);
    console.log(project_package);

    e.preventDefault();

    //Calculate Results
}

function displayData(){

}

function getSizeValue(){
    let value = document.getElementById('size').value;
    return value;
}

function getProjectValue(){
    let value = document.getElementById('service-package').value;
    return value;
}

