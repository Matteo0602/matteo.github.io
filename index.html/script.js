let display = document.getElementById('display');


function append(value) {

    display.value += value;

}


function clearDisplay() {

    display.value = '';

}


function toRadians(degrees) {

    return degrees * (Math.PI / 180);

}


function calculate() {

    try {

        let expression = display.value;


       

        expression = expression.replace(/sin\(([^)]+)\)/gi, (_, val) => {

            return Math.sin(toRadians(eval(val)));

        });


        expression = expression.replace(/cos\(([^)]+)\)/gi, (_, val) => {

            return Math.cos(toRadians(eval(val)));

        });


        expression = expression.replace(/tan\(([^)]+)\)/gi, (_, val) => {

            return Math.tan(toRadians(eval(val)));

        });



        expression = expression.replace(/sqrt\(([^)]+)\)/gi, (_, val) => {

            return Math.sqrt(eval(val));

        });




        display.value = eval(expression);

    } catch (error) {

        display.value = 'Error';

    }

}


function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {

        section.style.display = 'none';

    });

    document.getElementById(sectionId).style.display = 'block';

}