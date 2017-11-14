package editor;

import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;

import javax.imageio.ImageIO;

public class Pixel {
	
	static ArrayList<ArrayList<Integer>> level = new ArrayList<ArrayList<Integer>>();
	static ArrayList<Integer> row = new ArrayList<Integer>();
   
   static public void main(String[] args) throws IOException
   {
	   
		BufferedImage colors = ImageIO.read(new File("/Users/coding.../github/Nostalgia/colors.png"));
		BufferedImage image = ImageIO.read(new File("/Users/coding.../github/Nostalgia/colors.png"));
		Color grass = new Color(colors.getRGB(0, 0));
		Color dark_dirt = new Color(colors.getRGB(1, 0));
		Color dirt = new Color(colors.getRGB(2, 0));
		Color sand = new Color(colors.getRGB(3, 0));
		
			image = ImageIO.read(new File("/Users/coding.../github/Nostalgia/level.png"));
		for(Integer i=0;i<image.getHeight();i++) {
			row = new ArrayList<Integer>();
			for(Integer i2=0;i2<image.getHeight();i2++) {
				Color currentColor = new Color(image.getRGB(i2, i));
				if(currentColor.equals(grass)) {
					row.add(1);
				}else if(currentColor.equals(dirt)) {
					row.add(2);
				}else if(currentColor.equals(sand)) {
					row.add(3);
				}else if(currentColor.equals(dark_dirt)) {
					row.add(4);
				}else {
					row.add(0);
					System.out.print(currentColor.getRed() + ", " + currentColor.getGreen() + ", " + currentColor.getBlue() + "\n");
					System.out.print(grass.getRed() + ", " + grass.getGreen() + ", " + grass.getBlue() + "\n");
				}
			}
			level.add(row);
		}
		System.out.print(level + ";");
		
   }
}