import reviewer1 from "@/assets/reviewer-1.png";
import reviewer2 from "@/assets/reviewer-2.png";
import reviewer3 from "@/assets/reviewer-3.png";

function ReviewAvatars() {
  return (
    // Container principal com estilo de pílula
    <div className="border-2 mx-6 border-background p-2 rounded-full">
      <div className="flex -space-x-3 ">
        {/* Avatares com tamanho reduzido e object-cover */}
        <img
          className="w-10 h-10 object-cover border-2 border-primary rounded-full"
          src={reviewer1}
          alt="Reviewer 1"
        />
        <img
          className="w-10 h-10 object-cover border-2 border-primary rounded-full"
          src={reviewer2}
          alt="Reviewer 2"
        />
        <img
          className="w-10 h-10 object-cover border-2 border-primary rounded-full"
          src={reviewer3}
          alt="Reviewer 3"
        />
        <div className="flex items-center justify-center w-10 h-10 text-xs font-bold text-primary bg-background border-2 border-primary rounded-full">
          15k+
        </div>
      </div>
    </div>
  );
}

export default ReviewAvatars;

{
  /* ---  --- */
}
