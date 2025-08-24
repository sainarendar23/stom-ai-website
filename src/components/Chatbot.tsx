import React, { useEffect } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

const Chatbot = () => {
  useEffect(() => {
    createChat({
      webhookUrl: 'https://your-active-webhook-url.com/webhook/chat',
      webhookConfig: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      },
      target: '#n8n-chat',
      mode: 'window',
      chatInputKey: 'chatInput',
      chatSessionKey: 'sessionId',
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: true,
      defaultLanguage: 'en',
      initialMessages: [
        'Hi there! 👋',
        'I\'m your Storm.ai assistant. How can I help you automate your business today?'
      ],
      i18n: {
        en: {
          title: 'Storm.ai Assistant 👋',
          subtitle: "Let's discuss how we can automate your business processes!",
          footer: 'Powered by Storm.ai',
          getStarted: 'Start Conversation',
          inputPlaceholder: 'Ask about our AI agents...',
        },
      },
      enableStreaming: false,
    });
  }, []);

  return <div id="n8n-chat"></div>;
};

export default Chatbot;