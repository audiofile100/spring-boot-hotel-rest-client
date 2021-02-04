package com.synergisticit.service;

import com.sun.istack.ByteArrayDataSource;
import com.synergisticit.integration.dto.Booking;
import com.synergisticit.pdf.PdfGenerator;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMailMessage;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.mail.MessagingException;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {

    private final JavaMailSender mailSender;
    private final PdfGenerator pdfGenerator;

    public MailService(JavaMailSender mailSender, PdfGenerator pdfGenerator) {
        this.mailSender = mailSender;
        this.pdfGenerator = pdfGenerator;
    }

    public void sendPdf(String from, String to, String subject, String msg, Booking booking) {

        MimeMessage message = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            byte[] bytes = pdfGenerator.customPDFReport(booking).toByteArray();

            helper.setFrom(from);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(msg);
            helper.addAttachment("confirm.pdf", new ByteArrayResource(bytes));

            mailSender.send(message);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
