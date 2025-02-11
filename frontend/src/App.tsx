import ImageUpload from "@/components/image-upload";

function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-foreground p-6">
      <h1 className="text-5xl font-extrabold tracking-wide text-center mb-10">
        Upload Your Work Schedule
      </h1>
      <ImageUpload />
    </main>
  );
}

export default App;
