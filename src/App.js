import React from 'react';
import VideoPlatform from './comp/VideoPlatform'; // تأكد أن المسار صحيح إذا كان الملف في مجلد آخر

function App() {
  return (
    <div className="App">
      <VideoPlatform /> {/* استدعاء الكومبوننت الخاصة بالفيديوهات */}
    </div>
  );
}

export default App;