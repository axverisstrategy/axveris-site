// Formulário de contato com validação
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const diagnosticForm = document.getElementById('diagnosticForm');
    
    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Função para validar telefone
    function isValidPhone(phone) {
        // Aceita formatos como (11) 99999-9999, 11 99999-9999, 11999999999
        const phoneRegex = /^(?:\(?([0-9]{2})\)?\s?)?(?:9\s?)?([0-9]{4,5})-?([0-9]{4})$/;
        return phoneRegex.test(phone);
    }
    
    // Função para mostrar mensagem de erro
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        errorMessage.textContent = message;
        
        // Remove qualquer mensagem de erro existente
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            formGroup.removeChild(existingError);
        }
        
        formGroup.appendChild(errorMessage);
        input.classList.add('error');
    }
    
    // Função para limpar mensagem de erro
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        if (errorMessage) {
            formGroup.removeChild(errorMessage);
        }
        input.classList.remove('error');
    }
    
    // Função para validar formulário
    function validateForm(form) {
        let isValid = true;
        
        // Validar campos obrigatórios
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (field.type === 'checkbox') {
                if (!field.checked) {
                    showError(field, 'Este campo é obrigatório');
                    isValid = false;
                } else {
                    clearError(field);
                }
            } else if (!field.value.trim()) {
                showError(field, 'Este campo é obrigatório');
                isValid = false;
            } else {
                clearError(field);
            }
        });
        
        // Validar email
        const emailField = form.querySelector('input[type="email"]');
        if (emailField && emailField.value.trim() && !isValidEmail(emailField.value)) {
            showError(emailField, 'Por favor, insira um email válido');
            isValid = false;
        }
        
        // Validar telefone
        const phoneField = form.querySelector('input[name="phone"]');
        if (phoneField && phoneField.value.trim() && !isValidPhone(phoneField.value)) {
            showError(phoneField, 'Por favor, insira um telefone válido');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Manipulador de envio do formulário de contato
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(contactForm)) {
                // Simulação de envio bem-sucedido
                const formContainer = contactForm.parentElement;
                formContainer.innerHTML = `
                    <div class="form-success">
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Mensagem enviada com sucesso!</h3>
                        <p>Obrigado por entrar em contato. Retornaremos em até 24 horas úteis.</p>
                    </div>
                `;
                
                // Em um ambiente real, aqui seria feito o envio do formulário para o servidor
                // via AJAX ou outra tecnologia
            }
        });
    }
    
    // Manipulador de envio do formulário de diagnóstico
    if (diagnosticForm) {
        diagnosticForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(diagnosticForm)) {
                // Simulação de envio bem-sucedido
                const formContainer = diagnosticForm.parentElement;
                formContainer.innerHTML = `
                    <div class="form-success">
                        <div class="success-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <h3>Solicitação de diagnóstico enviada com sucesso!</h3>
                        <p>Obrigado pelo seu interesse. Um de nossos consultores entrará em contato em breve para agendar a entrevista inicial.</p>
                    </div>
                `;
                
                // Em um ambiente real, aqui seria feito o envio do formulário para o servidor
                // via AJAX ou outra tecnologia
            }
        });
    }
});
