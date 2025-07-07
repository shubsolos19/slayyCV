import React, { useState } from 'react';
import { FileSearch, Shield, Zap, TrendingUp, Cpu, Database, Network } from 'lucide-react';
import FileUpload from './components/FileUpload';
import AnalysisReport from './components/AnalysisReport';
import AnimatedGrid from './components/AnimatedGrid';
import { analyzeResume, AnalysisResult } from './utils/analysisEngine';

function App() {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    try {
      const result = await analyzeResume(file);
      setAnalysisResult(result);
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleNewAnalysis = () => {
    setAnalysisResult(null);
  };

  if (analysisResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <AnalysisReport result={analysisResult} onNewAnalysis={handleNewAnalysis} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Retro-Futuristic 3D Grid Background */}
      <AnimatedGrid />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Main Hero Section */}
        <main className="container mx-auto px-4 py-16">
          {/* Central Title Display */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 blur-3xl rounded-full scale-150"></div>
              
              {/* Main title */}
              <h1 className="relative text-6xl md:text-8xl font-bold font-mono tracking-wider mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse-neon">
                  SLAYY
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-400 animate-pulse-neon">
                  CV
                </span>
              </h1>
              
              {/* Subtitle */}
              <div className="relative">
                <p className="text-xl md:text-2xl text-cyan-300 font-mono tracking-widest mb-2">
                  NEURAL ANALYSIS ENGINE
                </p>
                <p className="text-lg text-purple-300 font-mono">
                  {'> OPTIMIZING HUMAN POTENTIAL_'}
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2 font-mono">ATS COMPATIBILITY</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Advanced parsing algorithms analyze resume structure for maximum ATS penetration.
              </p>
            </div>
            
            <div className="group bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-all duration-300">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-purple-300 mb-2 font-mono">KEYWORD OPTIMIZATION</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                Neural networks identify and optimize keyword density for target positions.
              </p>
            </div>
            
            <div className="group bg-black/60 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-pink-500/50 group-hover:shadow-pink-400/70 transition-all duration-300">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-pink-300 mb-2 font-mono">NEURAL INSIGHTS</h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                AI-powered recommendations enhance resume impact and effectiveness.
              </p>
            </div>
          </div>

          {/* Upload Section */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300">
            <FileUpload onFileUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
          </div>

          {/* Process Flow */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-white mb-12 font-mono tracking-wider">
              {'> NEURAL PROCESS FLOW_'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-400/70 transition-all duration-300">
                  <span className="text-white font-bold text-2xl font-mono">01</span>
                </div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3 font-mono">DATA UPLOAD</h4>
                <p className="text-gray-300 font-mono text-sm">Initialize resume data stream into neural processing matrix</p>
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500 to-transparent -z-10"></div>
              </div>
              
              <div className="relative group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-400/70 transition-all duration-300">
                  <span className="text-white font-bold text-2xl font-mono">02</span>
                </div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3 font-mono">AI ANALYSIS</h4>
                <p className="text-gray-300 font-mono text-sm">Deep learning algorithms process and analyze resume structure</p>
                {/* Connection line */}
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent -z-10"></div>
              </div>
              
              <div className="group">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/50 group-hover:shadow-pink-400/70 transition-all duration-300">
                  <span className="text-white font-bold text-2xl font-mono">03</span>
                </div>
                <h4 className="text-lg font-semibold text-pink-300 mb-3 font-mono">OUTPUT RESULTS</h4>
                <p className="text-gray-300 font-mono text-sm">Generate optimized recommendations and enhancement protocols</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-500/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white font-mono tracking-wider mb-4">
                {'> SYSTEM PERFORMANCE METRICS_'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 font-mono mb-2">98.7%</div>
                <div className="text-cyan-300 font-mono text-sm">ATS PASS RATE</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 font-mono mb-2">3.2x</div>
                <div className="text-purple-300 font-mono text-sm">INTERVIEW RATE BOOST</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 font-mono mb-2">47%</div>
                <div className="text-pink-300 font-mono text-sm">FASTER JOB PLACEMENT</div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/60 backdrop-blur-sm text-white py-8 mt-16 border-t border-cyan-500/30">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400 font-mono text-sm">
              © 2025 SLAYYCV // NEURAL RESUME SYSTEMS // OPTIMIZING HUMAN POTENTIAL
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;