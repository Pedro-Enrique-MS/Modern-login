// Elementos principais
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const mensagem = document.getElementById('mensagem-sucesso');

// Alternar entre login e cadastro
registerBtn.addEventListener('click', () => container.classList.add('active'));
loginBtn.addEventListener('click', () => container.classList.remove('active'));

// Alternar visibilidade da senha
document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const targetInput = document.getElementById(icon.dataset.target);
    const isPassword = targetInput.type === 'password';

    targetInput.type = isPassword ? 'text' : 'password';
    icon.innerHTML = isPassword
      ? '<i class="fa fa-eye-slash"></i>'
      : '<i class="fa fa-eye"></i>';
  });
});

// Validação e comportamento dos formulários
document.querySelectorAll('form').forEach(form => {
  const inputs = form.querySelectorAll('input');

  // Remover borda vermelha ao digitar
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      if (input.value.trim() !== '') {
        input.style.border = '';
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    let todosPreenchidos = true;

    inputs.forEach(input => {
      const preenchido = input.value.trim() !== '';
      input.style.border = preenchido ? '' : '2px solid #e74c3c';

      if (!preenchido) todosPreenchidos = false;
    });

    exibirMensagem(
      todosPreenchidos
        ? 'Enviado com sucesso!'
        : 'Por favor, preencha todos os campos.',
      todosPreenchidos ? '#4CAF50' : '#e74c3c'
    );
  });
});

// Exibe mensagem temporária
function exibirMensagem(texto, cor) {
  mensagem.textContent = texto;
  mensagem.style.backgroundColor = cor;
  mensagem.classList.add('mostrar');

  setTimeout(() => {
    mensagem.classList.remove('mostrar');
  }, 3500);
}
