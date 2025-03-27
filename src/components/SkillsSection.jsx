import Card from "./ui/Card";

const SkillsSection = () => (
  <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-10">
    <Card className="bg-orange-500 text-white p-10">
      <p className="font-bold">WEB, FRONT-END, FULL-STACK</p>
    </Card>
    <Card className="bg-lime-400 text-black p-10">
      <p className="font-bold">JAVASCRIPT, REACT.JS, NEXT.JS</p>
    </Card>
  </div>
);

export default SkillsSection;
