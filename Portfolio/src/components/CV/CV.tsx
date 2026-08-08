import cvPdf from "./file.pdf";

const CV = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <iframe
        src={cvPdf}
        width="100%"
        height="700px"
        title="PDF Viewer"
        className="rounded-xl border border-slate-300 shadow-lg"
      />
    </div>
  );
};

export default CV;