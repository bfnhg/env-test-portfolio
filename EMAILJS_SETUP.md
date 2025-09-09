# 📧 Configuration EmailJS - Guide Complet

## 🚀 Étapes pour configurer EmailJS

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un service email
1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email :
   - **Gmail** (recommandé pour commencer)
   - **Outlook**
   - **Yahoo**
   - Ou autres
4. Suivez les instructions pour connecter votre compte email
5. **Copiez le Service ID** (ex: `service_abc123`)

### 3. Créer un template d'email
1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```
Subject: Nouveau message de {{from_name}} - {{subject}}

Bonjour Adham,

Vous avez reçu un nouveau message depuis votre portfolio :

Nom: {{from_name}}
Email: {{from_email}}
Sujet: {{subject}}

Message:
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. **Copiez le Template ID** (ex: `template_xyz789`)

### 4. Obtenir votre clé publique
1. Allez dans **"Account"** > **"General"**
2. **Copiez votre Public Key** (ex: `user_abc123def456`)

### 5. Configurer les variables d'environnement
1. Créez un fichier `.env.local` dans la racine du projet
2. Ajoutez vos clés :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_abc123def456
```

### 6. Tester le formulaire
1. Redémarrez votre serveur de développement
2. Allez sur votre portfolio
3. Testez le formulaire de contact
4. Vérifiez que vous recevez l'email

## 🔧 Dépannage

### Problème : "Service not found"
- Vérifiez que le Service ID est correct
- Assurez-vous que le service est activé

### Problème : "Template not found"
- Vérifiez que le Template ID est correct
- Assurez-vous que le template est publié

### Problème : "Invalid public key"
- Vérifiez que la clé publique est correcte
- Assurez-vous qu'elle commence par `user_`

## 📊 Limites du plan gratuit
- **200 emails/mois**
- **2 services email**
- **2 templates**
- **1 utilisateur**

## 🎯 Prochaines étapes
Une fois configuré, votre formulaire sera 100% fonctionnel et vous recevrez directement les messages dans votre boîte email !

## 🆘 Support
Si vous avez des problèmes, consultez la [documentation EmailJS](https://www.emailjs.com/docs/) ou contactez-moi !

