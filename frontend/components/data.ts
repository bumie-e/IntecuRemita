import {
  card,
  card2,
  ussd,
  ussd2,
  phone,
  phone2,
  enaira,
  enaira2,
  remita,
  remita2,
  internet,
  internet2,
  bankbranch,
  bankbranch2,
  bankaccount,
  bankaccount2,
  banktransfer,
  banktransfer2,
} from './index'

export const paymentOptionData = [
  {
    title: 'Card',
    icon: card,
    icon2: card2,
  },
  {
    title: 'Bank Transfer',
    icon: banktransfer,
    icon2: banktransfer2,
  },
  {
    title: 'USSD',
    icon: ussd,
    icon2: ussd2,
  },
  {
    title: 'eNaira',
    icon: enaira,
    icon2: enaira2,
  },
  {
    title: 'Bank Branch',
    icon: bankbranch,
    icon2: bankbranch2,
  },
  {
    title: 'Remita',
    icon: remita,
    icon2: remita2,
  },
  {
    title: 'Wallet',
    icon: remita,
    icon2: remita2,
  },
  {
    title: 'Phone Number',
    icon: phone,
    icon2: phone2,
  },
  {
    title: 'Internet Banking',
    icon: internet,
    icon2: internet2,
  },
  {
    title: 'Bank Account',
    icon: bankaccount,
    icon2: bankaccount2,
  },
]