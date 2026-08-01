export const WHATSAPP_NUMBER = "919730766355"; // Marvelous Salon

export const generateWhatsAppLink = (
  title: string,
  data: Record<string, string | undefined>
): string => {
  let message = `--------------------------------\n${title}\n\n`;
  
  for (const [key, value] of Object.entries(data)) {
    if (value) {
      message += `${key}:\n${value}\n\n`;
    }
  }
  
  message += `--------------------------------`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
