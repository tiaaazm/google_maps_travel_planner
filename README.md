### **Location Plotter Web App**

Tiya Maheshwari.

A simple React + TypeScript web app to plot locations on a map, add notes and dates, and generate a shareable link.

---

### **Features**
- Plot locations on a Google Map by clicking.
- Add notes and dates to locations.
- View a list of saved locations.
- Generate a shareable link with the location data.

---

### **Technologies Used**
- **React** with TypeScript
- **Vite** for development
- **Google Maps API** for map interactions
- **localStorage** for temporary data storage

---

### **Setup Instructions**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your **Google Maps API Key** in `Map.tsx`:
   ```tsx
   googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
   ```

4. Run the app locally:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

---

### **Usage**
1. Click on the map to add a location.
2. Edit the location details (notes, date) in the form.
3. View saved locations in the list.
4. Copy the shareable link to share your plotted locations with others.

---

### **Future Enhancements**
- Improve link shortening (e.g., integrate with Bitly API).
- Add drag-and-drop functionality for markers.
- Enable persistent storage using Firebase or IndexedDB.
