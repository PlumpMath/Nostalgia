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
   
   static public void main(String[] args) throws IOException{
		BufferedImage tiles = ImageIO.read(new File(new File(System.getProperty("java.class.path")).getParentFile() + "/tile_colors.png"));
		BufferedImage obstacles = ImageIO.read(new File(new File(System.getProperty("java.class.path")).getParentFile() + "/obstacle_colors.png"));
		BufferedImage misc = ImageIO.read(new File(new File(System.getProperty("java.class.path")).getParentFile() + "/misc_colors.png"));
		BufferedImage interactions = ImageIO.read(new File(new File(System.getProperty("java.class.path")).getParentFile() + "/interaction_colors.png"));
		BufferedImage items = ImageIO.read(new File(new File(System.getProperty("java.class.path")).getParentFile() + "/item_colors.png"));
		
		BufferedImage image = ImageIO.read(new File("/Users/coding.../github/Nostalgia/tiles.png"));
		Color grass = new Color(tiles.getRGB(0, 0));
		Color dark_dirt = new Color(tiles.getRGB(1, 0));
		Color dirt = new Color(tiles.getRGB(2, 0));
		Color sand = new Color(tiles.getRGB(3, 0));
		
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
				}
			}
			level.add(row);
		}
		System.out.print("tiles\n" + level + ";");
		
   }
}