import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Random;
import java.util.Stack;
import java.util.stream.Stream;

public class cycle {

	public static void main(String[] args) throws IOException{
        Random rand = new Random();
		int count = 1;
        count = rand.nextInt(5);
        int Random = count;
          
 
       try (Stream<String> lines = Files.lines(Paths.get("css/test.txt"))) {
    String line32 = lines.skip(Random).findFirst().get();
    System.out.println(line32);
}
        //  for(int i = 1; i < Random; i++){
        //     if(i == 1){
        //         System.out.println("it's time to go back to 1");
        //     }
        //     System.out.println("Looking to go back to 1" + i);
        //  }
        
    }
}
