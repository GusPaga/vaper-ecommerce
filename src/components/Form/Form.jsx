export const Form = () => {
  return (
    <div className=" container my-5 bg-light">
      <div className="mb-3">
        <label for="formFile" className="form-label">
          Ejemplo de entrada de archivo predeterminado
        </label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <div className="mb-3">
        <label for="formFileMultiple" className="form-label">
          Ejemplo de entrada de varios archivos
        </label>
        <input
          className="form-control"
          type="file"
          id="formFileMultiple"
          multiple
        />
      </div>
      <div className="mb-3">
        <label for="formFileDisabled" className="form-label">
          Ejemplo de entrada de archivo deshabilitado
        </label>
        <input
          className="form-control"
          type="file"
          id="formFileDisabled"
          disabled
        />
      </div>
      <div className="mb-3">
        <label for="formFileSm" className="form-label">
          Ejemplo de entrada de archivo pequeño
        </label>
        <input
          className="form-control form-control-sm"
          id="formFileSm"
          type="file"
        />
      </div>
      <div>
        <label for="formFileLg" className="form-label">
          Ejemplo de entrada de archivos grandes
        </label>
        <input
          className="form-control form-control-lg"
          id="formFileLg"
          type="file"
        />
      </div>
    </div>
  );
};
