package com.synergisticit.pdf;

import com.itextpdf.text.*;
import com.itextpdf.text.pdf.PdfWriter;
import com.synergisticit.integration.dto.Booking;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;

@Slf4j
@Component
public class PdfGenerator {

    public ByteArrayOutputStream customPDFReport(Booking booking) {

        Document doc = new Document();
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {
            PdfWriter.getInstance(doc, out);
            doc.open();
            Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN, 14, BaseColor.BLACK);

            Image img = Image.getInstance(new ClassPathResource("src/main/resources/static" + booking.getHotelImgUrl()).getPath());
            img.scaleAbsolute(200, 200);
            doc.add(img);

            doc.add(new Paragraph("\nYour reservation details at: " + booking.getHotelName() + "\n\n", font));

            doc.add(new Paragraph("Check in:    " + booking.getCheckInDate(), font));
            doc.add(new Paragraph("Check out:    " + booking.getCheckOutDate(), font));

            doc.add(new Paragraph("\n" + booking.getTotalRooms() + " rooms for " + booking.getTotalGuests() + " guests.", font));

            double discount = booking.getDiscount();
            double total = booking.getRoomPrice() * booking.getTotalRooms();

            doc.add(new Paragraph("\ndiscount: " + discount, font));

            double finalPrice = total - (total * discount);

            doc.add(new Paragraph("\nTotal: " + finalPrice + " $\n", font));

            doc.close();
        } catch (DocumentException e) {
            log.debug(e.toString());
        } catch (IOException e) {
            e.printStackTrace();
        }

        return out;
    }
}
