function status(request, response) {
  response.status(200).json({ message: "curso.dev adquirindo conhecimento" });
}

export default status;