'use server';

interface ContactState {
  status: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function createContactData(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  // formのname属性ごとにformData.get()で値を取り出すことができる
  const rawFormData = {
    yourCompany: formData.get('yourCompany') as string,
    yourName: formData.get('yourName') as string,
    yourFurigana: formData.get('yourFurigana') as string,
    yourTel: formData.get('yourTel') as string,
    yourEmail: formData.get('yourEmail') as string,
    yourRequest: formData.get('yourRequest') as string,
    yourMessage: formData.get('yourMessage') as string,
    yourPrivacyCheck: formData.get('yourPrivacyCheck') as string,
  };

  if (!rawFormData.yourName) {
    return { status: 'error', message: 'お名前をを入力してください' };
  }
  if (!rawFormData.yourFurigana) {
    return { status: 'error', message: 'フリガナを入力してください' };
  }
  if (!rawFormData.yourTel) {
    return { status: 'error', message: '電話番号を入力してください' };
  }
  if (!validateEmail(rawFormData.yourEmail)) {
    return { status: 'error', message: 'メールアドレスを入力してください' };
  }
  if (!rawFormData.yourRequest) {
    return { status: 'error', message: 'ご用件を選択してください' };
  }
  if (!rawFormData.yourMessage) {
    return { status: 'error', message: 'ご用件の詳細を記入してください' };
  }
  if (!rawFormData.yourPrivacyCheck) {
    return { status: 'error', message: 'チェックボックスは必須項目です' };
  }

  return { status: 'success', message: 'OK' };
}
