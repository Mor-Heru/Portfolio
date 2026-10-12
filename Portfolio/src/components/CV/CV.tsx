import cvPdf from "./CV_Radoslaw_Lichon.pdf";

const CV = () => {
  return (
    <div className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-4 lg:px-6">
      <iframe
        src={cvPdf}
        width="100%"
        height="820px"
        title="PDF Viewer"
        className="rounded-xl border border-slate-300 shadow-lg bg-white"
      />
    </div>
  );
};

export default CV;