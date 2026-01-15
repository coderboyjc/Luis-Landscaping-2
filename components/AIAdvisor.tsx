import React, { useState, useRef } from 'react';
import { SectionId } from '../types';
import { Camera, Send, Sparkles, Loader2, ImagePlus, X } from 'lucide-react';
import Button from './Button';
import { analyzeYard } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description && !image) return;

    setLoading(true);
    setResult(null);

    try {
      const analysis = await analyzeYard(description, imagePreview || undefined);
      setResult(analysis);
    } catch (error) {
      console.error(error);
      alert('Failed to analyze. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.AI_ADVISOR} className="py-20 bg-green-900 text-white overflow-hidden relative">
      {/* Decorative Background Patterns */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.2,-19.2,95.8,-5.2C93.5,8.9,82,22.1,70.6,33.5C59.1,44.9,47.7,54.6,35.3,62.8C22.9,71,9.5,77.7,-3.4,83.6C-16.3,89.5,-28.7,94.6,-40.3,89.2C-51.9,83.8,-62.7,67.9,-70.6,53.4C-78.5,38.9,-83.5,25.8,-84.9,12.2C-86.4,-1.4,-84.2,-15.5,-77.1,-27.6C-70,-39.7,-58,-49.8,-45.6,-57.5C-33.2,-65.2,-20.4,-70.5,-6.6,-59.1L0,-47.7Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Intro */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-800 border border-green-600 text-green-300 text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              New Feature: Smart Yard Analysis
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              Not sure what your yard needs?
            </h2>
            <p className="text-green-100 text-lg mb-8 leading-relaxed">
              Upload a photo of your problem area or describe your vision. Our AI Landscaping Consultant will instantly analyze the situation and recommend the perfect service package.
            </p>
            
            <div className="space-y-4 text-green-200">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center mr-4 font-bold">1</div>
                <span>Snap a photo of weeds, dry spots, or overgrown trees.</span>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center mr-4 font-bold">2</div>
                <span>Upload it here or type a description.</span>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center mr-4 font-bold">3</div>
                <span>Get an instant expert recommendation.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 text-stone-900 shadow-2xl">
            {!result ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Describe your yard issue or goal
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="e.g. My lawn has yellow patches and I want to install a flower bed near the porch..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Upload a photo (Optional)
                  </label>
                  {!imagePreview ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-stone-300 rounded-lg p-8 text-center cursor-pointer hover:bg-stone-50 transition-colors"
                    >
                      <ImagePlus className="h-10 w-10 text-stone-400 mx-auto mb-2" />
                      <p className="text-sm text-stone-500">Click to upload image</p>
                    </div>
                  ) : (
                    <div className="relative rounded-lg overflow-hidden h-48 w-full bg-stone-100">
                      <img src={imagePreview} alt="Preview" className="h-full w-full object-cover" />
                      <button 
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md text-stone-600 hover:text-red-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  )}
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  disabled={loading || (!description && !image)}
                  className="flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5" />
                      Analyze My Yard
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-6 pb-6 border-b border-stone-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-green-800">Expert Recommendation</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      result.estimatedDifficulty === 'High' ? 'bg-red-100 text-red-800' : 
                      result.estimatedDifficulty === 'Medium' ? 'bg-amber-100 text-amber-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {result.estimatedDifficulty} Effort
                    </span>
                  </div>
                  <p className="text-stone-600 italic">
                    "{result.suggestion}"
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-3">
                    Recommended Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.recommendedServices.map((svc: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-stone-100 text-stone-700 rounded-md text-sm font-medium">
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button fullWidth onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}>
                    Request Quote for These Services
                  </Button>
                  <button 
                    onClick={() => setResult(null)}
                    className="w-full text-center text-sm text-stone-500 hover:text-stone-800 underline"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;