# Employee Management System - Frontend

> A modern, full-stack web application for managing employee records with a beautiful GitHub-inspired UI and dark/light theme support.

## 🌟 Features

- ✨ **CRUD Operations** - Create, Read, Update, and Delete employee records
- 🌓 **Dark/Light Theme** - Toggle between themes with instant switching
- 🎨 **GitHub-Style UI** - Premium, professional design inspired by GitHub
- 📱 **Responsive Design** - Works seamlessly on all screen sizes
- 🔔 **Toast Notifications** - Real-time feedback for user actions
- ⚡ **Fast & Modern** - Built with React 18 + Vite for optimal performance
- 🎯 **Type-Safe** - Form validation and error handling

## 🚀 Tech Stack

**Frontend:**
- [React 18](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and dev server
- [React Router DOM](https://reactrouter.com/) - Client-side routing
- [Axios](https://axios-http.com/) - HTTP client for API calls
- [React Toastify](https://fkhadra.github.io/react-toastify/) - Toast notifications
- [Bootstrap 5](https://getbootstrap.com/) - Base CSS framework (customized)

**Backend:**
- [Spring Boot](https://spring.io/projects/spring-boot) - Java backend framework
- [MySQL](https://www.mysql.com/) - Database
- REST API - Communication protocol

👉 **Backend Repository:** [EMS Backend](https://github.com/JesseHerrera04/ems-backend)

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or newer)
- **npm** or **yarn**
- **Backend running** - The Spring Boot backend must be running on `http://localhost:8080`

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JesseHerrera04/ems-frontend.git
   cd ems-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint** (if needed)
   
   The default API URL is `http://localhost:8080/api/employees`. To change it, modify:
   ```javascript
   // src/services/EmployeeService.js
   const REST_API_BASE_URL = 'http://localhost:8080/api/employees';
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎯 Usage

### Employee Management

1. **View Employees** - See all employees in a table with search and filter
2. **Add Employee** - Click "Add Employee" button and fill in the form
3. **Edit Employee** - Click "Edit" button on any employee row
4. **Delete Employee** - Click "Delete" button with confirmation
5. **View Details** - Click "View" to see full employee information

### Theme Toggle

Click the sun/moon icon in the header to switch between dark and light themes. Your preference is saved locally.

## 📁 Project Structure

```
ems-frontend/
├── src/
│   ├── components/          # React components
│   │   ├── HeaderComponent.jsx
│   │   ├── FooterComponent.jsx
│   │   ├── ListEmployeeComponent.jsx
│   │   ├── EmployeeComponent.jsx
│   │   └── EmployeeDetailsComponent.jsx
│  ├── context/             # React context
│   │   └── ThemeContext.jsx
│   ├── services/           # API services
│   │   └── EmployeeService.js
│   ├── index.css          # Global styles (GitHub theme)
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── public/                 # Static assets
├── package.json           # Dependencies
└── vite.config.js        # Vite configuration
```

## 🎨 Theme Customization

The application uses CSS custom properties for theming. Modify `src/index.css`:

```css
/* Dark Theme */
:root {
  --bg-primary: #0d1117;
  --bg-secondary: #161b22;
  --text-primary: #e6edf3;
  /* ... */
}

/* Light Theme */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --bg-secondary: #f6f8fa;
  --text-primary: #24292f;
  /* ... */
}
```

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Original Author:** [JesseHerrera04](https://github.com/JesseHerrera04)

## 🙏 Acknowledgments

- Inspired by GitHub's design system
- Built as a learning project for React and full-stack development
- Backend repository: [EMS Backend](https://github.com/JesseHerrera04/ems-backend)

## 📸 Screenshots

### Dark Theme
*Premium dark mode with GitHub-inspired design*

### Light Theme
*Clean light mode for better visibility*

### Employee Management
*Easy-to-use interface for managing employee records*

---

**Note:** Make sure the backend server is running before starting this application. See the [backend repository](https://github.com/JesseHerrera04/ems-backend) for setup instructions.