//The provided course information.
const courseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const assignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",//convert the date into date or can work in string
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const learnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25", //on time
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12", // early
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",//on due date
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",//ontime
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07", //late
        score: 140
      }
    }
  ];
  
  // function getLearnerData(course, ag, submissions) {
  //   // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];
  
  //   return result;
  // }
  
  // const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
  // console.log(result);
  //-----------------------
  // create getLearnerData function 
//   function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions){
//       let idInfo = {};
//       //If an AssignmentGroup does not belong to its course
//       try {
//             if (assignmentGroup.course_id !== courseInfo.id){
//                throw new Error (`AssignmentGroup does not belong to this course`);
//             } 
            
//             idInfo.course_id = courseInfo.id;
            
//             idInfo.submissionCount = learnerSubmissions.length;////////////////////
            
    
//             return idInfo;
//         }catch(err){
//         console.error(`Error has occured: ${err.message}`  );
//         throw err;
//       }
    
//   }
//   try {
//     const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
//     console.log("Result:", result);
// } catch (error) {
//     console.error("Caught error:Insure AssignmentGroup is in the correct course " );
// }

//-----------------------------------------------------------
//Is number and greater than ZERO
// function isNumberNotZero(points_possible){
//     try{
//         if( typeof points_possible !== `number` || points_possible <= 0) {
//         throw new Error (`Points_possible is either not a number or equal to 0.`);

      
//     }
//      }catch(err){
//         console.error(`Error has occured: ${err.message}`  );
//     //     throw err;
    
// }
// }
// console.log (isNumberNotZero(`cupcake`))
//----------------------------------------

//If an assignment is not yet due,
// assignmentGroup.assignments.due_at >=learnerSubmissions.submission. submitted_at
//Assignments - Declare a Variable
// assignment (assignmentGroup,learnerSubmissions)

//----------------------------------------------------------------

function assignmentsinfo(assignmentGroup, learnerSubmissions){
    const results = [];
    
    learnerSubmissions.forEach(submission => {
        const assignment = assignmentGroup.assignments.find(assignment => assignment.id === submission.assignment_id);
        if (!assignment)return;

       const dueDate = assignment.due_at;
       const submittedDate = new (submission.submission.submitted_at);
       let score = submission.submission.score;
       let id1 = assignment.id
        //add try catch here 
        if (submittedDate > dueDate){
          score = (0,score - (assignment.points_possible* 0.10));
        }
        else if (submittedDate < dueDate){
          return;
        }
        else if (submittedDate === dueDate){
          score = assignment.points_possible - score;
           
        results.push({
            assignment_id: id1,score:score, point_possible:assignment.points_possible
        });
       
    }  
        return results;
})}
const datacheck = assignmentsinfo(assignmentGroup.assignments,learnerSubmissions);
console.log(datacheck)
// /////--------------------------------

// function finalOutput( assignments,learnerSubmissions){
//     const obj1 = {}//for the first object -id:125
//     const obj2 = {}//for the second object - id:132
//     const results = [obj1,obj2 ];
//     learnerSubmissions.forEach(submission => {
//         const assignment = assignments.find(assignment => assignment.id === submission.assignment_id); 
//          if (assignment); {
//     let ratio1 = submission.submission.score /assignment.points_possible;
//     let person1 = assignment.id === submission.assignment_id;
//         if(person1)
//     results.push({
//         id:person1, 1:ratio1
//     });
// }   
// })
//     return results;
// } const datacheck2 = finalOutput(assignmentGroup.assignments,learnerSubmissions) 
// console.log(datacheck2)