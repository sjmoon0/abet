import {addNewProfessor, getProfessors, getSpecificProfessor, updateProfessor, deleteProfessor} from "../controllers/professor-crud-controller";
  
  const routes = app => {
    //Professor Metadata Routes
    app
      .route("/professor")
      .post(addNewProfessor)
      .get(getProfessors);
    app
    .route("/professor/:profId")
    .get(getSpecificProfessor)
    .put(updateProfessor)
    .delete(deleteProfessor);
  };
  
  export default routes;
  