# 🚀 CI/CD Pipeline con GitHub Actions

Este proyecto demuestra la implementación completa de un pipeline CI/CD usando GitHub Actions con una aplicación web basada en Express.js.

## 📋 Características

- ✅ **API REST** con Express.js
- ✅ **Tests automatizados** (Jest + Supertest)
- ✅ **Análisis de código** (ESLint)
- ✅ **Pipeline CI/CD** con GitHub Actions
- ✅ **Deployment automático**
- ✅ **Notificaciones** automáticas
- ✅ **Múltiples versiones** de Node.js
- ✅ **Cobertura de código**
- ✅ **Auditoría de seguridad**

## 🏗️ Arquitectura del Pipeline

```mermaid
graph TB
    A[Push to Repository] --> B[Trigger CI Pipeline]
    B --> C[Lint Code]
    B --> D[Run Tests]
    B --> E[Security Audit]
    C --> F[Build Application]
    D --> F
    E --> F
    F --> G[Upload Artifacts]
    G --> H{Branch is main?}
    H -->|Yes| I[Deploy to Staging]
    H -->|No| J[End]
    I --> K[Deploy to Production]
    K --> L[Create Release]
    L --> M[Send Notifications]