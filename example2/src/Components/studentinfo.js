
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash } from "react-icons/fa";
// function Studenttable() {
//   const [students, setStudents] = useState([]);
//   const baseURL = "http://localhost:3000";
//   const setStudentData = () => {
//     axios.get(baseURL + "/posts")
//       .then((response) => {
//         setStudents(response.data);
//         // console.log(response.data);
//       }).catch(error => {
//         alert("Error Ocurred while loading data:" + error);
//       });
//   }
//   useEffect(() => {
//     setStudentData();
//   }, []);

//   const removeStudent = (id) => {
//     // console.log(id);
//     axios.delete(baseURL + "/posts/" + id).then((response) => {
//       alert("Student deleted");
//       setStudentData();

//     }).catch(error => {
//       alert("error===" + error);
//     });
//   }


//   return (

//     <div>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>

//           {/* <tr> */}
//             <td>1</td>
//             <td>manasa</td>
//             <td>developer</td>
//             <FaTrash />
//             <FaEdit /> 
//           {/* </tr> */}
//         </thead>
//         <tbody>
//           {
//             students &&
//             students.map((student, index) => (
//                <tr>
//                 <td>{student.id}</td>
//                 <td>{student.name}</td>
//                 <td>{student.role}</td>


//                 <td><FaEdit />  |

//                   <button
//                     onClick={() => removeStudent(student.id)} className="button"
//                   >
//                     <FaTrash />
//                   </button>

//                 </td>

//               </tr>
//             ))
//           }
//         </tbody>
//       </Table>
//     </div>


//   );
// }
// export default Studenttable;  
// import Table from 'react-bootstrap/Table';
// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { FaEdit, FaTrash } from "react-icons/fa";

// function Studenttable() {
//   const [students, setStudents] = useState([]);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [editedStudent, setEditedStudent] = useState({});
//   const baseURL = "http://localhost:3000";

//   const setStudentData = () => {
//     axios.get(baseURL + "/posts")
//       .then((response) => {
//         setStudents(response.data);
//       }).catch(error => {
//         alert("Error occurred while loading data: " + error);
//       });
//   }

//   useEffect(() => {
//     setStudentData();
//   }, []);

//   const removeStudent = (id) => {
//     axios.delete(baseURL + "/posts/" + id)
//       .then((response) => {
//         alert("Student deleted");
//         setStudentData();
//       }).catch(error => {
//         alert("Error: " + error);
//       });
//   }

//   const openEditForm = (studentform) => {
//     setEditedStudent(studentform);
//     setShowEditForm(true);
//   }

//   const handleEditFormClose = () => {
//     setShowEditForm(false);
//   }

//   const handleUpdate = () => {
//     // Perform the update using the editedStudent data
//     axios.put(baseURL + "/posts/" + editedStudent.id, editedStudent)
//       .then((response) => {
//         alert("Student updated");
//         setStudentData();
//         setShowEditForm(false);
//       }).catch(error => {
//         alert("Error updating student: " + error);
//       });
//   }

//   return (
//     <div>
//       <Table striped bordered hover>
//         {/* ... Header ... */}
//         <tbody>
//           <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//           </tr>
//           {students && students.map((student, index) => (
//             <tr key={index}>
//               <td>{student.id}</td>
//               <td>{student.name}</td>
//               <td>{student.role}</td>
//               <td>
//                 <FaEdit onClick={() => openEditForm(student)} /> |
//                 <button onClick={() => removeStudent(student.id)} className="button">
//                   <FaTrash />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>

//       {/* Edit Form */}
//       {showEditForm && (
//         <div>
//           <form>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 value={editedStudent.name}
//                 onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
//               />
//             </label>
//             <label>
//               Role:
//               <input
//                 type="text"
//                 value={editedStudent.role}
//                 onChange={(e) => setEditedStudent({ ...editedStudent, role: e.target.value })}
//               />
//             </label>
//             <button type="button" onClick={handleUpdate}>Update</button>
//             <button type="button" onClick={handleEditFormClose}>Cancel</button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Studenttable;
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Studenttable() {
  const [students, setStudents] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedStudent, setEditedStudent] = useState({});
  const baseURL = "http://localhost:3000";
  const navigate = useNavigate();

  const setStudentData = () => {
    axios.get(baseURL + "/posts")
      .then((response) => {
        setStudents(response.data);
      }).catch(error => {
        alert("Error occurred while loading data: " + error);
      });
  }

  useEffect(() => {
    setStudentData();
  }, []);

  const removeStudent = (id) => {
    axios.delete(baseURL + "/posts/" + id)
      .then((response) => {
        alert("Student deleted");
        setStudentData();
      }).catch(error => {
        alert("Error: " + error);
      });
  }

  const openEditForm = (student) => {
    setEditedStudent(student);
    setShowEditForm(true);
    navigate("/studentform"); // Navigate to the Student component
  }
    const handleUpdate = () => {
    // Perform the update using the editedStudent data
    axios.put(baseURL + "/posts/" + editedStudent.id, editedStudent)
      .then((response) => {
        alert("Student updated");
        setStudentData();
        setShowEditForm(false);
      }).catch(error => {
        alert("Error updating student: " + error);
      });
  }

  const handleEditFormClose = () => {
    setShowEditForm(false);
  }



  return (
    <div>
      <Table striped bordered hover>
        {/* ... Header ... */}
        <tbody>
          {students && students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.role}</td>
              <td>
                <FaEdit onClick={() => openEditForm(student)} /> |
                <button onClick={() => removeStudent(student.id)} className="button">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Form */}
      {showEditForm && (
        <div>
          <form>
            <label>
              Name:
              <input
                type="text"
                value={editedStudent.name}
                onChange={(e) => setEditedStudent({ ...editedStudent, name: e.target.value })}
              />
            </label>
            <label>
              Role:
              <input
                type="text"
                value={editedStudent.role}
                onChange={(e) => setEditedStudent({ ...editedStudent, role: e.target.value })}
              />
            </label>
            <button type="button" onClick={handleUpdate}>Update</button>
            <button type="button" onClick={handleEditFormClose}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Studenttable;
