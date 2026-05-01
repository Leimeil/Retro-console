
function ResultScreen({ result }) {
  return (
    <div className="w-[450px] h-[250px] flex flex-col justify-center items-center border-4">
      <h1 className="text-2xl font-bold mb-4">{result}</h1>
    </div>
  )
}

export default ResultScreen