let grade = 88;
const NumGrade = grade;
if(grade >= 97){
    grade = 'A+';
}
else{
    if(grade >= 93){
        grade = 'A';
    }
    else{
        if(grade >= 90){
            grade = 'A-';
        }
        else{
            if(grade >= 87){
                grade = 'B+';
            }
            else{
                if(grade >= 83){
                    grade = 'B';
                }
                else{
                    if(grade >= 80){
                        grade = 'B-';
                    }
                    else{
                        if(grade >= 77){
                            grade = 'C+';
                        }
                        else{
                            if(grade >= 73){
                                grade = 'C';
                            }
                            else{
                                if(grade >= 70){
                                    grade = 'C-';
                                }
                                else{
                                    if(grade >= 67){
                                        grade = 'D+';
                                    }
                                    else{
                                        if(grade >= 63){
                                            grade = 'D';
                                        }
                                        else{
                                            if(grade >= 60){
                                                grade = 'D-';
                                            }
                                            else{
                                                grade = 'F';
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
switch(grade){
    case grade = 'A+':
    case grade = 'A':
    case grade = 'A-':
    case grade = 'B+':
    case grade = 'B':
    case grade = 'B-':
    case grade = 'C+':
    case grade = 'C':
    case grade = 'C-':
    case grade = 'D+':
    case grade = 'D':
    case grade = 'D-':
        text = "You Passed!";
        break;
    case grade = 'F':
        text = "You Failed!";
        break;
    default:
        text = "";
}
console.log("Your grade is " + NumGrade + " which corresponds to " + grade + ". " + text);