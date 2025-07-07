import React, { useState, useCallback } from 'react';
import { Upload, FileText, AlertCircle, Zap } from 'lucide-react';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  isAnalyzing: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, isAnalyzing }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const validateFile = (file: File): string | null => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];
    
    if (!allowedTypes.includes(file.type)) {
      return 'INVALID FILE FORMAT // ACCEPTED: PDF, DOC, DOCX, TXT';
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      return 'FILE SIZE EXCEEDS LIMIT // MAX: 10MB';
    }
    
    return null;
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setUploadError(null);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file) {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        return;
      }
      onFileUpload(file);
    }
  }, [onFileUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    const file = e.target.files?.[0];
    
    if (file) {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        return;
      }
      onFileUpload(file);
    }
  }, [onFileUpload]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
          ${isDragOver 
            ? 'border-cyan-400 bg-cyan-500/20 scale-105 shadow-lg shadow-cyan-500/30' 
            : 'border-cyan-500/50 hover:border-cyan-400/70 hover:bg-cyan-500/10'
          }
          ${isAnalyzing ? 'pointer-events-none opacity-50' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isAnalyzing}
        />
        
        <div className="flex flex-col items-center space-y-6">
          <div className={`
            p-6 rounded-full transition-all duration-300
            ${isDragOver ? 'bg-cyan-500/30 shadow-lg shadow-cyan-500/40' : 'bg-cyan-500/20'}
          `}>
            <Upload className={`
              w-12 h-12 transition-colors duration-300
              ${isDragOver ? 'text-cyan-300' : 'text-cyan-400'}
            `} />
          </div>
          
          <div>
            <p className="text-2xl font-bold text-white mb-3 font-mono tracking-wider">
              &gt; INITIATE DATA UPLOAD_
            </p>
            <p className="text-lg text-cyan-300 font-mono mb-2">
              DROP RESUME FILE OR CLICK TO SELECT
            </p>
            <p className="text-sm text-gray-400 font-mono">
              SUPPORTED: PDF // DOC // DOCX // TXT // MAX: 10MB
            </p>
          </div>
          
          {!isAnalyzing && (
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-200 font-mono font-bold tracking-wider shadow-lg hover:shadow-xl hover:shadow-cyan-500/30">
              SELECT FILE
            </button>
          )}
          
          {isAnalyzing && (
            <div className="flex items-center space-x-3 text-cyan-400">
              <div className="relative">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-cyan-400 border-t-transparent"></div>
                <Zap className="absolute inset-0 w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
              <span className="text-lg font-mono font-bold tracking-wider">NEURAL ANALYSIS IN PROGRESS...</span>
            </div>
          )}
        </div>
      </div>
      
      {uploadError && (
        <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3 backdrop-blur-sm">
          <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
          <span className="text-red-300 font-mono font-bold">{uploadError}</span>
        </div>
      )}
    </div>
  );
};

export default FileUpload;